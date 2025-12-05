import { execSync } from 'child_process'
import { existsSync, rmSync, cpSync, readdirSync, statSync } from 'fs'
import { join } from 'path'

const distDir = 'dist'
const deployBranch = 'main'

console.log('🚀 Iniciando deploy...\n')

// 1. Verificar se a pasta dist existe
if (!existsSync(distDir)) {
  console.error('❌ Erro: Pasta dist não encontrada. Execute "npm run build" primeiro.')
  process.exit(1)
}

console.log('✅ Pasta dist encontrada\n')

// 2. Verificar se estamos em um repositório Git
try {
  execSync('git rev-parse --git-dir', { stdio: 'ignore' })
} catch {
  console.log('📦 Inicializando repositório Git...')
  execSync('git init', { stdio: 'inherit' })
}

// 3. Adicionar remote se não existir
try {
  execSync('git remote get-url origin', { stdio: 'ignore' })
  console.log('✅ Remote já configurado\n')
} catch {
  console.log('🔗 Configurando remote...')
  try {
    execSync(`git remote add origin https://github.com/ygos-96/lembranca.git`, { stdio: 'inherit' })
    console.log('✅ Remote configurado\n')
  } catch {
    console.log('⚠️  Remote já existe ou erro ao configurar\n')
  }
}

// 4. Criar branch de deploy se não existir
try {
  execSync(`git show-ref --verify --quiet refs/heads/${deployBranch}`, { stdio: 'ignore' })
  console.log(`✅ Branch ${deployBranch} já existe\n`)
} catch {
  console.log(`🌿 Criando branch ${deployBranch}...`)
  execSync(`git checkout -b ${deployBranch}`, { stdio: 'inherit' })
  console.log(`✅ Branch ${deployBranch} criada\n`)
}

// 5. Fazer checkout da branch de deploy
try {
  execSync(`git checkout ${deployBranch}`, { stdio: 'inherit' })
} catch {
  console.log(`⚠️  Criando branch ${deployBranch}...`)
  execSync(`git checkout -b ${deployBranch}`, { stdio: 'inherit' })
}

// 6. Limpar branch (remover tudo exceto .git, .gitignore, node_modules)
console.log('🧹 Limpando branch...')
const filesToKeep = ['.git', '.gitignore', 'node_modules', 'dist', 'src', 'package.json', 'package-lock.json', 'vite.config.js', 'tailwind.config.js', 'deploy.js', 'README.md', '.gitignore']

function getAllFiles(dir, baseDir = '') {
  const files = []
  const items = readdirSync(dir)
  
  for (const item of items) {
    const fullPath = join(dir, item)
    const relativePath = baseDir ? join(baseDir, item) : item
    
    if (filesToKeep.some(keep => relativePath.includes(keep))) {
      continue
    }
    
    const stat = statSync(fullPath)
    if (stat.isDirectory()) {
      files.push(...getAllFiles(fullPath, relativePath))
    } else {
      files.push(relativePath)
    }
  }
  
  return files
}

try {
  const allFiles = getAllFiles('.')
  allFiles.forEach(file => {
    try {
      rmSync(file, { recursive: true, force: true })
    } catch (err) {
      // Ignorar erros
    }
  })
} catch (err) {
  // Ignorar erros na limpeza
}

// 7. Copiar conteúdo da dist para a raiz
console.log('📋 Copiando arquivos da dist para a raiz...')

function copyDistFiles(srcDir, destDir = '.') {
  const items = readdirSync(srcDir)
  
  for (const item of items) {
    const srcPath = join(srcDir, item)
    const destPath = join(destDir, item)
    const stat = statSync(srcPath)
    
    if (stat.isDirectory()) {
      if (!existsSync(destPath)) {
        execSync(`mkdir "${destPath}"`, { stdio: 'ignore', shell: true })
      }
      copyDistFiles(srcPath, destPath)
    } else {
      cpSync(srcPath, destPath, { force: true })
      console.log(`  ✅ ${destPath}`)
    }
  }
}

copyDistFiles(distDir)

// 8. Adicionar todos os arquivos
console.log('\n📝 Adicionando arquivos ao Git...')
execSync('git add -A', { stdio: 'inherit' })

// 9. Verificar se há mudanças
let hasChanges = false
try {
  const status = execSync('git status --porcelain', { encoding: 'utf-8' })
  hasChanges = status.trim().length > 0
} catch {
  // Se não conseguir verificar, assumir que há mudanças
  hasChanges = true
}

if (!hasChanges) {
  console.log('\n✅ Nenhuma mudança para commitar')
  // Tentar fazer push mesmo assim (pode ser o primeiro push)
  try {
    execSync(`git push -u origin ${deployBranch} --force`, { stdio: 'inherit' })
    console.log('\n✅ Deploy concluído!')
    process.exit(0)
  } catch {
    console.log('\n⚠️  Nenhum commit para fazer push')
    process.exit(0)
  }
}

// 10. Commit
console.log('\n💾 Fazendo commit...')
const commitMessage = `Deploy: Build ${new Date().toISOString().split('T')[0]}`
try {
  execSync(`git commit -m "${commitMessage}"`, { stdio: 'inherit' })
  console.log('✅ Commit realizado\n')
} catch (err) {
  // Se falhar, tentar fazer commit permitindo vazio (primeiro commit)
  try {
    execSync(`git commit --allow-empty -m "${commitMessage}"`, { stdio: 'inherit' })
    console.log('✅ Commit vazio criado\n')
  } catch {
    console.log('⚠️  Erro ao fazer commit, tentando push mesmo assim...\n')
  }
}

// 11. Push para o repositório
console.log('🚀 Fazendo push para o GitHub...')
try {
  execSync(`git push -u origin ${deployBranch} --force`, { stdio: 'inherit' })
  console.log('\n✅ Deploy concluído com sucesso!')
  console.log(`🌐 Seu site está disponível em: https://ygos-96.github.io/lembranca/`)
} catch (err) {
  console.error('\n❌ Erro ao fazer push:', err.message)
  console.log('\n💡 Dica: Verifique se você tem permissão para fazer push no repositório')
  process.exit(1)
}

