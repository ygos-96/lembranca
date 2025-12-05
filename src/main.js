import './style.css'

// Estado da aplicação
let currentSlide = 0
let isScrolling = false
const slides = []
const totalSlides = 10
let messagesLoadingComplete = false // Flag para controlar quando todas as mensagens foram carregadas

// Criar estrutura HTML
function createHTML() {
  return `
    <!-- Navigation Dots -->
    <nav class="fixed right-2 top-1/2 -translate-y-1/2 z-[100] flex right-2 md:right-8 flex-col gap-1.5 md:gap-4">
      ${Array.from({ length: totalSlides }, (_, i) => `
        <button 
          class="nav-dot w-2 h-2 md:w-3 md:h-3 rounded-full bg-white/30 border border-white/50 md:border-2 cursor-pointer transition-all duration-300 hover:bg-white/50 hover:scale-125 ${i === 0 ? 'active' : ''}" 
          data-slide="${i}"
          aria-label="Ir para slide ${i + 1}"
        ></button>
      `).join('')}
    </nav>

    <!-- Slides Container -->
    <main class="relative w-full h-screen overflow-hidden" role="main" aria-label="História do nosso relacionamento">
      <!-- Slide 1: Primeira Mensagem -->
      <section class="slide active" data-slide="0">
        <div class="relative w-full h-full flex flex-col items-center justify-center px-4 py-8 md:p-8 overflow-hidden">
          <div class="messages-container relative w-full max-w-md flex flex-col gap-2.5 md:gap-3">
            <div class="message-bubble bg-[#1a6a5c] text-white self-end">
              <div class="typing-indicator"></div>
              <p class="text-base md:text-lg leading-relaxed">Eai sorrisinho</p>
            </div>
            <div class="message-bubble bg-[#e1ffc7] text-[#000] self-start">
              <p class="text-base md:text-lg leading-relaxed">oii</p>
            </div>
            <div class="message-bubble bg-[#e1ffc7] text-[#000] self-start">
              <p class="text-base md:text-lg leading-relaxed">ta bem?</p>
            </div>
            <div class="message-bubble bg-[#1a6a5c] text-white self-end">
              <p class="text-base md:text-lg leading-relaxed">to sim e vc?</p>
          </div>
            <div class="message-bubble bg-[#1a6a5c] text-white self-end">
              <p class="text-base md:text-lg leading-relaxed">tive que ir la te encher o saco no tinder kk</p>
            </div>
          </div>
          <div class="text-center z-10 px-4">
            <h2 class="slide-title font-['Playfair_Display'] text-[clamp(1.75rem,5vw,4rem)] font-bold text-white mb-4 md:mb-4 [text-shadow:3px_3px_30px_rgba(0,0,0,0.6)] animate-[fadeInUp_1s_ease-out]">Tudo começou aqui…</h2>
            <p class="slide-subtitle text-[clamp(1rem,2.5vw,1.5rem)] text-white [text-shadow:2px_2px_20px_rgba(0,0,0,0.5)] font-light animate-[fadeInUp_1s_ease-out_0.3s_both]">Uma simples mensagem que mudou tudo.</p>
          </div>
          <div class="sparkles"></div>
        </div>
      </section>

      <!-- Slide 2: Primeiro Encontro -->
      <section class="slide" data-slide="1">
        <div class="relative w-full h-full flex flex-col items-center justify-center px-4 py-8 md:p-8 overflow-hidden">
          <div class="parallax-bg absolute w-full h-full top-0 left-0 overflow-hidden">
            <div class="bokeh-light light-1"></div>
            <div class="bokeh-light light-2"></div>
            <div class="bokeh-light light-3"></div>
            <div class="bokeh-light light-4"></div>
            <div class="bokeh-light light-5"></div>
          </div>
          <div class="floating-hearts absolute w-full h-full top-0 left-0 pointer-events-none">
            <div class="heart heart-1">💖</div>
            <div class="heart heart-2">💕</div>
            <div class="heart heart-3">💗</div>
            <div class="heart heart-4">💝</div>
            <div class="heart heart-5">💞</div>
          </div>
          <div class="golden-glow"></div>
          <div class="text-center z-10 px-4">
            <div class="font-['Playfair_Display'] text-[clamp(3.5rem,12vw,10rem)] font-bold text-white mb-6 md:mb-8 [text-shadow:3px_3px_30px_rgba(255,215,0,0.5)] animate-[fadeInUp_1s_ease-out] leading-none tracking-tight">25/06</div>
            <h2 class="slide-title font-['Playfair_Display'] text-[clamp(1.75rem,5vw,4rem)] font-bold text-white mb-4 md:mb-4 [text-shadow:2px_2px_20px_rgba(0,0,0,0.3)] animate-[fadeInUp_1s_ease-out_0.2s_both]">Nesse dia, sem perceber,</h2>
            <p class="slide-subtitle text-[clamp(1rem,2.5vw,1.5rem)] text-white/90 font-light animate-[fadeInUp_1s_ease-out_0.3s_both]">nossos caminhos se alinharam.</p>
          </div>
        </div>
      </section>

      <!-- Slide 3: As Estrelas -->
      <section class="slide" data-slide="2">
        <div class="relative w-full h-full flex flex-col items-center justify-center px-4 py-8 md:p-8 overflow-hidden bg-transparent">
          <div class="stars-bg absolute w-full h-full top-0 left-0 overflow-hidden bg-transparent">
            <canvas id="starMapCanvas" class="star-map-canvas absolute w-full h-full top-0 left-0 z-[1] transition-all duration-500 ease-in-out"></canvas>
            <div class="star-map-overlay absolute w-full h-full top-0 left-0 z-[2] pointer-events-none"></div>
          </div>
          <div class="text-center z-10 transition-all duration-1000 ease-in-out px-4 md:px-0" id="starMapText">
            <h2 class="slide-title font-['Playfair_Display'] text-[clamp(1.75rem,6vw,4rem)] font-bold text-white mb-3 md:mb-4 [text-shadow:2px_2px_20px_rgba(0,0,0,0.3)] animate-[fadeInUp_1s_ease-out] transition-all duration-1000">Talvez tenha sido o destino…</h2>
            <p class="slide-subtitle text-[clamp(1rem,3vw,1.5rem)] text-white/90 font-light animate-[fadeInUp_1s_ease-out_0.3s_both] transition-all duration-1000">mas naquele dia, até as estrelas sorriam.</p>
          </div>
          <!-- Card de informações - Desktop à esquerda, Mobile lateral deslizante -->
          <!-- Card de informações - Desktop à esquerda, Mobile lateral deslizante -->
          <div class="fixed left-8 top-1/2 -translate-y-1/2 z-[3] max-w-xs transition-all duration-1000 opacity-0 hidden md:block" id="starMapInfo"></div>
          
          <!-- Modal mobile para informações -->
          <div class="fixed right-4 top-1/2 -translate-y-1/2 z-[4] transform translate-x-full transition-transform duration-400 ease-out md:hidden" id="starMapInfoMobile">
            <!-- Botão fechar fora do modal (acima) -->
            <button 
              type="button"
              id="starMapInfoCloseBtn"
              class="absolute right-0 -top-10 z-[5] w-8 h-8 flex items-center justify-center text-white text-2xl font-bold transition-all duration-200 opacity-0 pointer-events-none md:hidden"
              aria-label="Fechar informações"
            >
              ×
            </button>
            <div class="relative w-80 max-w-[calc(100vw-2rem)] max-h-[calc(80vh-2rem)] bg-black/90 backdrop-blur-xl rounded-2xl border border-white/30 shadow-2xl overflow-y-auto">
              <div class="p-5" id="starMapInfoMobileContent"></div>
            </div>
          </div>
          <!-- Seta indicadora / Botão fechar - sem background, mais colada -->
          <div class="fixed right-4 top-1/2 -translate-y-1/2 z-[5] cursor-pointer transition-all duration-200 md:hidden" id="starMapInfoToggle" style="display: none;">
            <div class="text-white text-2xl font-bold drop-shadow-lg" id="starMapInfoToggleIcon">←</div>
          </div>
          
          <!-- Controles - Desktop embaixo, Mobile com botão toggle -->
          <div class="fixed bottom-28 left-1/2 -translate-x-1/2 z-10 w-full max-w-5xl px-4 transition-all duration-1000 hidden md:block" id="starMapControls">
            <form class="star-map-form-container" id="starMapForm" aria-label="Configurar data e localização do encontro" novalidate>
              <div class="flex gap-5 items-center flex-wrap w-full">
                <div class="star-map-input-wrapper">
                  <label for="starMapDate" class="sr-only">Data do encontro</label>
                  <input 
                    type="date" 
                    id="starMapDate" 
                    name="date"
                    class="star-map-input" 
                    value="2025-06-25" 
                    aria-label="Data do encontro"
                    required
                  >
                </div>
                <div class="star-map-input-wrapper">
                  <label for="starMapTime" class="sr-only">Hora do encontro</label>
                  <input 
                    type="time" 
                    id="starMapTime" 
                    name="time"
                    class="star-map-input" 
                    value="20:00" 
                    aria-label="Hora do encontro"
                    required
                  >
                </div>
                <div class="star-map-input-wrapper star-map-city-wrapper">
                  <label for="starMapCity" class="sr-only">Cidade do encontro</label>
                  <input 
                    type="text" 
                    id="starMapCity" 
                    name="city"
                    class="star-map-input star-map-city" 
                    placeholder="Cidade" 
                    value="São Paulo" 
                    aria-label="Cidade do encontro"
                    required
                    autocomplete="address-level2"
                  >
                </div>
                <button 
                  type="submit"
                  id="starMapUpdateBtn" 
                  class="star-map-button" 
                  aria-label="Atualizar mapa estelar"
                >
                  <span class="star-map-button-icon" aria-hidden="true">✨</span>
                </button>
              </div>
              <div id="starMapLoading" class="mt-3 text-center text-yellow-400 text-sm italic hidden" role="status" aria-live="polite">Buscando coordenadas...</div>
            </form>
          </div>
          
          <!-- Controles Mobile - Botão toggle +/x -->
          <div class="fixed bottom-6 right-4 z-10 md:hidden" id="starMapControlsMobile">
            <button 
              type="button"
              id="starMapToggleBtn" 
              class="w-13 h-13 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-purple-600 to-purple-800 border-2 border-white/30 shadow-lg flex items-center justify-center text-white text-2xl md:text-2xl font-bold transition-all duration-300 hover:scale-110 active:scale-95"
              aria-label="Abrir configurações"
            >
              <span id="starMapToggleIcon">+</span>
            </button>
            
            <!-- Formulário mobile (escondido por padrão) -->
            <div class="absolute bottom-20 right-0 w-80 max-w-[calc(100vw-1rem)] bg-black/80 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl transform scale-0 opacity-0 transition-all duration-300 origin-bottom-right" id="starMapFormMobile" style="margin-right: 0.5rem; margin-bottom: 0.5rem; margin-top: 0.5rem;">
              <form id="starMapFormMobileForm" aria-label="Configurar data e localização do encontro" novalidate class="p-5">
                <div class="flex flex-col gap-4">
                  <div>
                    <label for="starMapDateMobile" class="sr-only">Data do encontro</label>
                    <input 
                      type="date" 
                      id="starMapDateMobile" 
                      name="date"
                      class="star-map-input w-full" 
                      value="2025-06-25" 
                      aria-label="Data do encontro"
                      required
                    >
                  </div>
                  <div>
                    <label for="starMapTimeMobile" class="sr-only">Hora do encontro</label>
                    <input 
                      type="time" 
                      id="starMapTimeMobile" 
                      name="time"
                      class="star-map-input w-full" 
                      value="20:00" 
                      aria-label="Hora do encontro"
                      required
                    >
                  </div>
                  <div>
                    <label for="starMapCityMobile" class="sr-only">Cidade do encontro</label>
                    <input 
                      type="text" 
                      id="starMapCityMobile" 
                      name="city"
                      class="star-map-input w-full" 
                      placeholder="Cidade" 
                      value="São Paulo" 
                      aria-label="Cidade do encontro"
                      required
                      autocomplete="address-level2"
                    >
                  </div>
                  <button 
                    type="submit"
                    id="starMapUpdateBtnMobile" 
                    class="star-map-button w-full mt-2" 
                    aria-label="Atualizar mapa estelar"
                  >
                    <span class="star-map-button-icon" aria-hidden="true">✨</span>
                  </button>
                </div>
                <div id="starMapLoadingMobile" class="mt-3 text-center text-yellow-400 text-sm italic hidden" role="status" aria-live="polite">Buscando coordenadas...</div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <!-- Slide 4: Primeiro "Te Amo" -->
      <section class="slide" data-slide="3">
        <div class="relative w-full h-full flex flex-col items-center justify-center p-4 md:p-8 overflow-hidden">
          <div class="wave-bg absolute w-full h-full top-0 left-0"></div>
          <div class="stars-container absolute w-full h-full top-0 left-0 pointer-events-none">
            <div class="star star-1 absolute text-2xl">✨</div>
            <div class="star star-2 absolute text-2xl">⭐</div>
            <div class="star star-3 absolute text-2xl">✨</div>
            <div class="star star-4 absolute text-2xl">⭐</div>
            <div class="star star-5 absolute text-2xl">✨</div>
            <div class="star star-6 absolute text-2xl">⭐</div>
          </div>
          
          <!-- Título inicial -->
          <div class="love-title text-center z-10 px-4 mb-4 md:mb-6" id="loveTitle">
            <h2 class="slide-title-large font-['Playfair_Display'] text-[clamp(2rem,7vw,5.5rem)] font-bold text-white mb-2 md:mb-4 [text-shadow:0_0_30px_rgba(255,255,255,0.5)] tracking-wider">Eu Te Amo</h2>
            <p class="slide-subtitle text-[clamp(0.9rem,2.2vw,1.3rem)] text-white/90 font-light">Três palavras que mudaram tudo. Uma promessa que se renova a cada dia.</p>
          </div>
          
          <!-- Container de mensagens (escondido inicialmente) -->
          <div class="messages-container relative w-full max-w-md flex flex-col gap-2.5 md:gap-3 z-10 opacity-0" id="loveMessagesContainer">
            <!-- Mensagens serão inseridas dinamicamente via JavaScript -->
          </div>
        </div>
      </section>

      <!-- Slide 5: Nossa Música -->
      <section class="slide" data-slide="4">
        <div class="relative w-full h-full flex flex-col overflow-hidden" id="musicSlideBg">
          <!-- Texto inicial sobre nossa música -->
          <div class="music-intro-text absolute inset-0 flex flex-col items-center justify-center z-20 px-6 md:px-8 py-8 opacity-0 pointer-events-none" id="musicIntroText">
            <h2 class="slide-title font-['Playfair_Display'] text-[clamp(1.75rem,5vw,4rem)] font-bold text-white mb-4 md:mb-6 [text-shadow:2px_2px_20px_rgba(0,0,0,0.3)] text-center">Nossa Música</h2>
            <p class="slide-subtitle text-[clamp(1rem,2.5vw,1.5rem)] text-white/90 font-light text-center max-w-2xl px-4">Cada música tem um significado… Mas essa sempre vai ser a nossa música.</p>
            </div>
          
          <!-- Player estilo Spotify Mobile (tela inteira) -->
          <div class="spotify-player-mobile w-full h-full flex flex-col overflow-hidden opacity-0 translate-y-8" id="musicPlayerContainer">
            <!-- Barra superior -->
            <div class="player-top-bar flex items-center justify-between px-6 py-3 flex-shrink-0">
              <button class="chevron-down-btn text-white/80" aria-label="Fechar player">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
                </svg>
              </button>
              <span class="text-white/80 text-sm font-medium">Playing from Album</span>
              <button class="menu-btn text-white/80" aria-label="Menu">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
                </svg>
              </button>
            </div>
            <!-- Capa do álbum -->
            <div class="album-cover-container flex justify-center items-center">
              <div class="album-cover aspect-square rounded-lg shadow-2xl overflow-hidden">
                <img src="" alt="Lisboa - ANAVITÓRIA" class="w-full h-full object-cover" id="albumCoverImg">
            </div>
            </div>
            
            <!-- Informações da música -->
            <div class="song-info px-6 pb-3">
              <p class="artist-name text-white text-base font-medium mb-2" id="artistName">ANAVITÓRIA</p>
              <h3 class="song-title text-white text-2xl font-bold" id="songTitle">Lisboa</h3>
          </div>
            
            <!-- Controles do player -->
            <div class="player-controls-section px-6 pb-4 flex-shrink-0">
              <!-- Barra de progresso -->
              <div class="progress-container mb-4">
                <div class="progress-bar-wrapper relative mb-2">
                  <div class="progress-bar-bg w-full h-1 bg-white/30 rounded-full"></div>
                  <div class="progress-bar-fill h-1 bg-white rounded-full absolute top-0 left-0" style="width: 0%"></div>
                  <div class="progress-bar-handle w-3 h-3 bg-white rounded-full absolute top-1/2 -translate-y-1/2 cursor-pointer shadow-lg" style="left: 0%"></div>
          </div>
                <div class="flex justify-between text-xs text-white/70">
                  <span id="currentTime">0:00</span>
                  <span id="totalTime">3:39</span>
          </div>
              </div>
              
              <!-- Controles principais -->
              <div class="flex items-center justify-center gap-6 mb-4">
                <button class="control-btn" id="shuffleBtn" aria-label="Embaralhar">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M10.59 9.17L5.41 4 4 5.41l5.17 5.17 1.42-1.41zM14.5 4l2.04 2.04L4 18.59 5.41 20 17.96 7.46 20 9.5V4h-5.5zm.33 9.41l-1.41 1.41 3.13 3.13L14.5 20H20v-5.5l-2.04 2.04-3.13-3.13z"/>
                  </svg>
                </button>
                
                <button class="control-btn" id="prevBtn" aria-label="Anterior">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/>
                  </svg>
                </button>
                
                <button class="play-pause-btn" id="playPauseBtn" aria-label="Reproduzir">
                  <svg class="play-icon" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                  <svg class="pause-icon hidden" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                  </svg>
                </button>
                
                <button class="control-btn" id="nextBtn" aria-label="Próximo">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"/>
                  </svg>
                </button>
                
                <button class="control-btn" id="repeatBtn" aria-label="Repetir">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z"/>
                  </svg>
                </button>
              </div>
              
              <!-- Controle de Volume - Apenas Mobile -->
              <div class="volume-control-wrapper">
                <svg class="volume-icon-svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style="display: none;">
                  <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                </svg>
                <div class="volume-slider-container" id="volumeBarWrapper">
                  <div class="volume-slider-track" id="volumeBarBg"></div>
                  <div class="volume-slider-progress" id="volumeBarFill"></div>
                  <div class="volume-slider-thumb" id="volumeBarHandle"></div>
                </div>
              </div>
              
              <!-- Ícones inferiores -->
              <div class="flex items-center justify-center gap-8 mt-6">
                <button class="bottom-icon-btn" id="libraryBtn" aria-label="Biblioteca">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9H9V9h10v2zm-4 4H9v-2h6v2zm4-8H9V5h10v2z"/>
                  </svg>
                </button>
                
                <button class="bottom-icon-btn heart-btn" id="likeBtn" aria-label="Curtir">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                </button>
                
                <button class="bottom-icon-btn" id="queueBtn" aria-label="Fila">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          
          <!-- Áudio element (hidden) -->
          <audio 
            id="musicAudioPlayer" 
            preload="metadata"
            style="display: none;">
            <source src="" type="audio/mpeg" id="audioSource">
            Seu navegador não suporta o elemento de áudio.
          </audio>
          
        </div>
      </section>

      <!-- Slide 6: Promessas e Sonhos -->
      <section class="slide" data-slide="5">
        <div class="relative w-full h-full flex flex-col items-center justify-center px-4 py-8 md:p-8 overflow-hidden">
          <div class="promises-bg absolute w-full h-full top-0 left-0"></div>
          <div class="floating-sparkles absolute w-full h-full top-0 left-0 pointer-events-none">
            <div class="sparkle sparkle-1">✨</div>
            <div class="sparkle sparkle-2">⭐</div>
            <div class="sparkle sparkle-3">✨</div>
            <div class="sparkle sparkle-4">💫</div>
            <div class="sparkle sparkle-5">✨</div>
            <div class="sparkle sparkle-6">⭐</div>
          </div>
          
          <div class="text-center z-10 mb-8 md:mb-12 px-4">
            <h2 class="slide-title font-['Playfair_Display'] text-[clamp(2rem,6vw,4.5rem)] font-bold text-white mb-4 md:mb-6 [text-shadow:2px_2px_20px_rgba(0,0,0,0.5)]">Promessas e Sonhos</h2>
            <p class="slide-subtitle text-[clamp(1rem,2.5vw,1.5rem)] text-white/90 font-light">O que quero construir ao seu lado</p>
          </div>
          
          <div class="promises-container relative w-full max-w-4xl z-10 px-4" id="promisesContainer">
            <!-- Cards serão inseridos dinamicamente -->
          </div>
        </div>
      </section>

      <!-- Slide 7: O que amo em você -->
      <section class="slide" data-slide="6">
        <div class="relative w-full h-full flex flex-col items-center justify-center px-4 py-8 md:p-8 overflow-hidden">
          <div class="love-reasons-bg absolute w-full h-full top-0 left-0"></div>
          <div class="floating-hearts-2 absolute w-full h-full top-0 left-0 pointer-events-none">
            <div class="heart-float heart-float-1">💖</div>
            <div class="heart-float heart-float-2">💕</div>
            <div class="heart-float heart-float-3">💗</div>
            <div class="heart-float heart-float-4">💝</div>
            <div class="heart-float heart-float-5">💞</div>
          </div>
          
          <div class="text-center z-10 mb-8 md:mb-12 px-4">
            <h2 class="slide-title font-['Playfair_Display'] text-[clamp(2rem,6vw,4.5rem)] font-bold text-white mb-4 md:mb-6 [text-shadow:2px_2px_20px_rgba(0,0,0,0.5)]">O que amo em você</h2>
          </div>
          
          <div class="love-reason-card relative z-10 max-w-3xl px-4 md:px-4 mb-8 md:mb-12 mx-auto" id="loveReasonCard">
            <div class="bg-white/10 backdrop-blur-xl rounded-3xl p-6 md:p-12 border border-white/20 shadow-2xl w-full">
              <p class="love-reason-text font-['Playfair_Display'] text-[clamp(1.25rem,3vw,2rem)] text-white text-center leading-relaxed [text-shadow:1px_1px_10px_rgba(0,0,0,0.3)]" id="loveReasonText">
                Carregando...
              </p>
            </div>
          </div>
          
          <button class="next-reason-btn relative z-10 flex items-center gap-4 px-12 md:px-16 py-4 bg-white/20 backdrop-blur-md rounded-full border border-white/30 text-white font-medium text-lg hover:bg-white/30 transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg" id="nextReasonBtn">
            <span class="px-2">Próxima razão</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </section>

      <!-- Slide 7: Dias Juntos -->
      <section class="slide" data-slide="7">
        <div class="relative w-full h-full flex flex-col items-center justify-center px-4 py-8 md:p-8 overflow-hidden">
          <div class="days-together-bg absolute w-full h-full top-0 left-0"></div>
          <div class="floating-hearts-days absolute w-full h-full top-0 left-0 pointer-events-none">
            <div class="heart-float-days heart-float-days-1">💖</div>
            <div class="heart-float-days heart-float-days-2">💕</div>
            <div class="heart-float-days heart-float-days-3">💗</div>
            <div class="heart-float-days heart-float-days-4">💝</div>
            <div class="heart-float-days heart-float-days-5">💞</div>
            <div class="heart-float-days heart-float-days-6">💖</div>
          </div>
          
          <div class="days-heart-container relative z-10 text-center" id="daysHeartContainer">
            <div class="heart-wrapper relative inline-block">
              <svg class="heart-svg" width="280" height="260" viewBox="0 0 280 260" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="heartGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#ff6b9d;stop-opacity:1" />
                    <stop offset="50%" style="stop-color:#c44569;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#ff6b9d;stop-opacity:1" />
                  </linearGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                <path d="M140,240 C80,200 20,140 20,90 C20,50 50,20 90,20 C110,20 130,30 140,50 C150,30 170,20 190,20 C230,20 260,50 260,90 C260,140 200,200 140,240 Z" 
                      fill="url(#heartGradient)" 
                      filter="url(#glow)"
                      class="heart-path"/>
              </svg>
              <div class="days-content absolute inset-0 flex flex-col items-center justify-center">
                <div class="days-number font-['Playfair_Display'] text-[clamp(3rem,8vw,6rem)] font-bold text-white [text-shadow:2px_2px_20px_rgba(0,0,0,0.5)]" id="daysNumber">0</div>
                <div class="days-label font-['Playfair_Display'] text-[clamp(1rem,2.5vw,1.5rem)] text-white/90 mt-2 [text-shadow:1px_1px_10px_rgba(0,0,0,0.3)]">dias juntos</div>
              </div>
            </div>
          </div>
          
          <div class="days-subtitle text-center z-10 mt-8 md:mt-12 px-4">
            <p class="font-['Playfair_Display'] text-[clamp(1.1rem,2.5vw,1.5rem)] text-white/80 italic [text-shadow:1px_1px_10px_rgba(0,0,0,0.3)]">Cada dia ao seu lado é um presente 💜</p>
          </div>
        </div>
      </section>

      <!-- Slide 8: Proposta -->
      <section class="slide" data-slide="8">
        <div class="relative w-full h-full flex flex-col items-center justify-center py-8 md:p-8 overflow-hidden">
          <div class="proposal-bg absolute w-full h-full top-0 left-0"></div>
          
          <!-- Estado inicial: Botão -->
          <div class="proposal-button-container text-center z-10" id="proposalButtonContainer">
            <p class="proposal-intro-text text-white font-medium text-lg md:text-xl mb-4 [text-shadow:2px_2px_10px_rgba(0,0,0,0.3)]">
              Para continuar nossa história…
            </p>
            <button 
              id="proposalButton"
              type="button"
              onclick="showProposal()"
              class="proposal-continue-btn relative z-10 px-12 py-5 md:px-16 md:py-6 bg-gradient-to-r from-pink-500/40 to-purple-500/40 backdrop-blur-lg rounded-full border-2 border-white/50 text-white font-medium text-base md:text-lg hover:from-pink-500/50 hover:to-purple-500/50 transition-all duration-300 hover:scale-105 active:scale-95 shadow-2xl"
            >
              <span class="px-2">clique aqui</span>
            </button>
          </div>
          
          <!-- Estado após clique: Proposta -->
          <div class="proposal-question-container text-center z-10 px-4 opacity-0 pointer-events-none absolute inset-0 flex flex-col items-center justify-center" id="proposalQuestionContainer">
            <div class="pulsing-heart text-8xl md:text-9xl mb-6" id="pulsingHeart">💖</div>
            <h2 class="proposal-question font-['Playfair_Display'] text-[clamp(2rem,5vw,4rem)] font-bold text-white mb-8 [text-shadow:2px_2px_20px_rgba(0,0,0,0.5)]">Quer namorar comigo?</h2>
            
            <!-- Botões de resposta -->
            <div class="proposal-buttons flex gap-4 md:gap-6 mt-4" id="proposalButtons">
              <button 
                id="proposalYesBtn"
                type="button"
                onclick="handleYesProposal()"
                class="proposal-yes-btn px-10 py-5 md:px-14 md:py-6 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full text-white font-bold text-lg md:text-xl hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-pink-500/50"
              >
                <span class="px-2">Sim! 💖</span>
              </button>
              <button 
                id="proposalNoBtn"
                type="button"
                onclick="handleNoProposal()"
                class="proposal-no-btn px-10 py-5 md:px-14 md:py-6 bg-gray-600/50 backdrop-blur-md rounded-full text-white font-bold text-lg md:text-xl hover:scale-110 transition-all duration-300 shadow-lg border border-white/30"
              >
                <span class="px-2">Não</span>
              </button>
            </div>
          </div>
          
          <!-- Container para fogos/emoji quando clicar em Sim -->
          <div class="fireworks-container absolute inset-0 pointer-events-none z-20" id="fireworksContainer"></div>
        </div>
      </section>

      <!-- Slide 9: Mensagem Final -->
      <section class="slide" data-slide="9">
        <div class="relative w-full h-full flex flex-col items-center justify-center overflow-hidden bg-black">
          <!-- Corações roxos de fundo -->
          <div class="final-hearts-bg absolute w-full h-full top-0 left-0 pointer-events-none">
            <div class="final-heart final-heart-1">💜</div>
            <div class="final-heart final-heart-2">💜</div>
            <div class="final-heart final-heart-3">💜</div>
            <div class="final-heart final-heart-4">💜</div>
            <div class="final-heart final-heart-5">💜</div>
            <div class="final-heart final-heart-6">💜</div>
            <div class="final-heart final-heart-7">💜</div>
            <div class="final-heart final-heart-8">💜</div>
            <div class="final-heart final-heart-9">💜</div>
            <div class="final-heart final-heart-10">💜</div>
            <div class="final-heart final-heart-11">💜</div>
            <div class="final-heart final-heart-12">💜</div>
          </div>
          
          <div class="text-center z-10 max-w-6xl mx-auto final-message-container py-8">
            <p id="finalMessageText" class="font-['Playfair_Display'] text-[clamp(1.75rem,5vw,3.5rem)] text-white leading-relaxed [text-shadow:2px_2px_20px_rgba(0,0,0,0.5)]"></p>
          </div>
        </div>
      </section>

    </div>

    <!-- Scroll Indicator -->
    <div id="scrollIndicator" class="fixed bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 z-[50] opacity-100 transition-opacity duration-500">
      <div class="flex flex-col items-center gap-1 md:gap-2">
        <div class="arrow-down animate-arrow-bounce"></div>
        <p class="text-sm md:text-base text-white [text-shadow:2px_2px_15px_rgba(0,0,0,0.7)] font-medium">Deslize para continuar</p>
      </div>
    </div>
  `
}

// Inicializar aplicação
function init() {
  const app = document.querySelector('#app')
  app.innerHTML = createHTML()
  
  // Coletar slides
  document.querySelectorAll('.slide').forEach(slide => {
    slides.push(slide)
  })
  
  // Configurar navegação por dots
  setupNavigation()
  
  // Configurar scroll
  setupScroll()
  
  // Configurar animações
  setupAnimations()
  
  
  // Configurar controles do mapa estelar
  setupStarMapControls()
  
  // Mostrar primeiro slide
  showSlide(0)
}

// Configurar navegação por dots
function setupNavigation() {
  const dots = document.querySelectorAll('.nav-dot')
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      goToSlide(index)
    })
  })
}

// Timer para esconder dots no mobile (slides intermediários)
let navDotsTimer = null

// Mostrar dots temporariamente quando houver interação
function showNavDotsTemporarily() {
  const nav = document.querySelector('nav')
  if (nav && window.innerWidth < 768 && currentSlide > 0 && currentSlide < totalSlides - 1) {
    // Limpar timer anterior
    if (navDotsTimer) {
      clearTimeout(navDotsTimer)
      navDotsTimer = null
    }
    
    // Mostrar dots
    nav.style.opacity = '1'
    nav.style.pointerEvents = 'auto'
    
    // Esconder após 2 segundos
    navDotsTimer = setTimeout(() => {
      nav.style.opacity = '0'
      nav.style.pointerEvents = 'none'
    }, 2000)
  }
}

// Configurar scroll
function setupScroll() {
  let scrollTimeout
  let lastScrollTime = 0
  
  // Verificar se o evento ocorreu dentro de um container scrollável
  function isInsideScrollableContainer(element) {
    const messagesContainer = document.getElementById('loveMessagesContainer')
    const promisesContainer = document.getElementById('promisesContainer')
    
    if (messagesContainer && (messagesContainer.contains(element) || messagesContainer === element)) {
      return messagesContainer
    }
    if (promisesContainer && (promisesContainer.contains(element) || promisesContainer === element)) {
      return promisesContainer
    }
    
    return null
  }
  
  // Verificar se o container pode rolar mais
  function canScrollContainer(container, direction) {
    if (!container) return false
    
    // Se for o container de mensagens e ainda não terminou de carregar, não permitir scroll
    if (container.id === 'loveMessagesContainer' && !messagesLoadingComplete) {
      return false
    }
    
    const isAtTop = container.scrollTop <= 0
    const isAtBottom = container.scrollTop >= container.scrollHeight - container.clientHeight - 1
    
    if (direction === 'down') {
      return !isAtBottom
    } else {
      return !isAtTop
    }
  }
  
  window.addEventListener('wheel', (e) => {
    if (isScrolling) return
    
    // Verificar se está dentro de algum container scrollável
    const scrollableContainer = isInsideScrollableContainer(e.target)
    if (scrollableContainer) {
      const direction = e.deltaY > 0 ? 'down' : 'up'
      
      // Se o container pode rolar naquela direção, não mudar slide
      if (canScrollContainer(scrollableContainer, direction)) {
        e.stopPropagation()
        return
      }
      
      // Se não pode rolar mais, verificar se está no topo (para cima) ou no fim (para baixo)
      const isAtTop = scrollableContainer.scrollTop <= 0
      const isAtBottom = scrollableContainer.scrollTop >= scrollableContainer.scrollHeight - scrollableContainer.clientHeight - 1
      
      // Só permitir mudança de slide se estiver no limite do container
      if (direction === 'down' && !isAtBottom) {
        e.stopPropagation()
        return
      }
      if (direction === 'up' && !isAtTop) {
        e.stopPropagation()
        return
      }
    }
    
    const now = Date.now()
    if (now - lastScrollTime < 800) return
    lastScrollTime = now
    
    // Mostrar dots temporariamente ao interagir
    showNavDotsTemporarily()
    
    if (e.deltaY > 0) {
      nextSlide()
    } else {
      prevSlide()
    }
  }, { passive: true })
  
  // Touch events para mobile
  let touchStartY = 0
  let touchEndY = 0
  let touchStartElement = null
  
  document.addEventListener('touchstart', (e) => {
    touchStartY = e.changedTouches[0].screenY
    touchStartElement = e.target
  }, { passive: true })
  
  document.addEventListener('touchmove', (e) => {
    // Verificar se está dentro de algum container scrollável
    const scrollableContainer = isInsideScrollableContainer(e.target)
    if (scrollableContainer) {
      const direction = touchStartY > e.changedTouches[0].screenY ? 'down' : 'up'
      
      // Se o container pode rolar naquela direção, não mudar slide
      if (canScrollContainer(scrollableContainer, direction)) {
        e.stopPropagation()
        return
      }
    }
  }, { passive: true })
  
  document.addEventListener('touchend', (e) => {
    touchEndY = e.changedTouches[0].screenY
    
    // Verificar se está dentro de algum container scrollável
    const scrollableContainer = isInsideScrollableContainer(e.target)
    if (scrollableContainer) {
      const swipeDistance = touchStartY - touchEndY
      
      // Verificar se pode rolar mais
      if (Math.abs(swipeDistance) > 50) {
        const direction = swipeDistance > 0 ? 'down' : 'up'
        
        if (canScrollContainer(scrollableContainer, direction)) {
          e.stopPropagation()
          return
        }
        
        // Se não pode rolar mais, verificar se está no limite
        const isAtTop = scrollableContainer.scrollTop <= 0
        const isAtBottom = scrollableContainer.scrollTop >= scrollableContainer.scrollHeight - scrollableContainer.clientHeight - 1
        
        if (direction === 'down' && !isAtBottom) {
          e.stopPropagation()
          return
        }
        if (direction === 'up' && !isAtTop) {
          e.stopPropagation()
          return
        }
      } else {
        // Se o movimento foi pequeno, não mudar slide
        e.stopPropagation()
        return
      }
    }
    
    handleSwipe()
  }, { passive: true })
  
  function handleSwipe() {
    if (isScrolling) return
    const swipeDistance = touchStartY - touchEndY
    
    if (Math.abs(swipeDistance) > 50) {
      // Mostrar dots temporariamente ao interagir
      showNavDotsTemporarily()
      
      if (swipeDistance > 0) {
        nextSlide()
      } else {
        prevSlide()
      }
    }
  }
  
  // Keyboard navigation
  window.addEventListener('keydown', (e) => {
    if (isScrolling) return
    
    // Mostrar dots temporariamente ao interagir
    showNavDotsTemporarily()
    
    if (e.key === 'ArrowDown' || e.key === 'PageDown') {
      nextSlide()
    } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
      prevSlide()
    }
  })
}

// Navegação entre slides
function nextSlide() {
  if (currentSlide < totalSlides - 1) {
    goToSlide(currentSlide + 1)
  }
}

function prevSlide() {
  if (currentSlide > 0) {
    goToSlide(currentSlide - 1)
  }
}

function goToSlide(index) {
  if (isScrolling || index === currentSlide) return
  
  // Se estiver saindo do slide final, resetar animação
  if (currentSlide === 9 && index !== 9) {
    if (finalMessageTimeout) {
      clearTimeout(finalMessageTimeout)
      finalMessageTimeout = null
    }
    finalMessageAnimationStarted = false
    const messageElement = document.getElementById('finalMessageText')
    if (messageElement) {
      messageElement.textContent = ''
    }
  }
  
  // Se estiver saindo do slide de música, pausar e resetar
  if (currentSlide === 4 && index !== 4) {
    const audioPlayer = document.getElementById('musicAudioPlayer')
    if (audioPlayer && !audioPlayer.paused) {
      audioPlayer.pause()
      audioPlayer.currentTime = 0
      audioPlayer.volume = 1
      isPlaying = false
      stopProgressUpdate()
      
      // Resetar botão de play
      const playPauseBtn = document.getElementById('playPauseBtn')
      if (playPauseBtn) {
        const playIcon = playPauseBtn.querySelector('.play-icon')
        const pauseIcon = playPauseBtn.querySelector('.pause-icon')
        if (playIcon) playIcon.classList.remove('hidden')
        if (pauseIcon) pauseIcon.classList.add('hidden')
      }
      
      // Resetar estados visuais
      const introText = document.getElementById('musicIntroText')
      const playerContainer = document.getElementById('musicPlayerContainer')
      if (introText) {
        introText.style.opacity = '0'
      }
      if (playerContainer) {
        playerContainer.style.opacity = '0'
        playerContainer.style.transform = 'translateY(32px)'
      }
    }
  }
  
  isScrolling = true
  currentSlide = index
  
  // Atualizar slides
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.classList.add('active')
      slide.classList.remove('prev', 'next')
    } else if (i < index) {
      slide.classList.remove('active', 'next')
      slide.classList.add('prev')
    } else {
      slide.classList.remove('active', 'prev')
      slide.classList.add('next')
    }
  })
  
  // Atualizar dots
  document.querySelectorAll('.nav-dot').forEach((dot, i) => {
    if (i === index) {
      dot.classList.add('active')
    } else {
      dot.classList.remove('active')
    }
  })
  
  // Controlar visibilidade dos dots no mobile
  const nav = document.querySelector('nav')
  if (nav && window.innerWidth < 768) {
    // Limpar timer anterior
    if (navDotsTimer) {
      clearTimeout(navDotsTimer)
      navDotsTimer = null
    }
    
    // Primeira (0) ou última (7) tela: sempre visível
    if (index === 0 || index === totalSlides - 1) {
      nav.style.opacity = '1'
      nav.style.pointerEvents = 'auto'
    } else {
      // Slides intermediários: mostrar e depois esconder após 2 segundos
      nav.style.opacity = '1'
      nav.style.pointerEvents = 'auto'
      navDotsTimer = setTimeout(() => {
        nav.style.opacity = '0'
        nav.style.pointerEvents = 'none'
      }, 2000)
    }
  }
  
  // Trigger animações específicas do slide
  triggerSlideAnimations(index)
  
  // Esconder scroll indicator no último slide
  const scrollIndicator = document.getElementById('scrollIndicator')
  if (scrollIndicator) {
    if (index === totalSlides - 1) {
      scrollIndicator.classList.add('opacity-0')
      scrollIndicator.classList.remove('opacity-100')
    } else {
      scrollIndicator.classList.add('opacity-100')
      scrollIndicator.classList.remove('opacity-0')
    }
  }
  
  setTimeout(() => {
    isScrolling = false
  }, 1000)
}

function showSlide(index) {
  goToSlide(index)
}

// Animações específicas por slide
function triggerSlideAnimations(slideIndex) {
  switch(slideIndex) {
    case 0:
      animateMessages()
      break
    case 1:
      animateHearts()
      break
    case 2:
      // Restaurar elementos quando voltar ao slide das estrelas
      restoreStarMapElements()
      animateStarMap()
      break
    case 3:
      animateLoveText()
      break
    case 4:
      animateMusicPlayer()
      break
    case 5:
      animatePromises()
      break
    case 6:
      animateLoveReasons()
      break
    case 7:
      animateDaysTogether()
      break
    case 8:
      animateProposal()
      break
    case 9:
      animateFinalMessage()
      break
  }
}

// Animações
function animateMessages() {
  const messages = document.querySelectorAll('.message-bubble')
  messages.forEach((msg, index) => {
    setTimeout(() => {
      msg.classList.add('show')
    }, index * 1500)
  })
}

function animateHearts() {
  const hearts = document.querySelectorAll('.floating-hearts .heart')
  hearts.forEach((heart, index) => {
    setTimeout(() => {
      heart.style.animation = 'floatUp 4s ease-in-out infinite'
      heart.style.animationDelay = `${index * 0.3}s`
    }, 100)
  })
}

function animateLoveText() {
  const title = document.getElementById('loveTitle')
  const container = document.getElementById('loveMessagesContainer')
  if (!title || !container) return
  
  // Resetar flag de carregamento
  messagesLoadingComplete = false
  
  // Desabilitar scroll do container enquanto carrega
  container.style.overflow = 'hidden'
  container.style.pointerEvents = 'none'
  
  // Limpar mensagens anteriores
  container.innerHTML = ''
  container.style.opacity = '0'
  
  // Mostrar título inicialmente
  title.style.opacity = '1'
  title.style.transition = 'opacity 1s ease-out'
  
  // Mensagens reais
  const messages = [
    {
      text: 'Meu amor, sinceramente eu não tenho palavras pra expressar o quanto sou grata por você ter aparecido na minha vida. Sério, sei que já falei isso outras vezes kkkkk, mas é que apesar do pouco tempo que a gente tem de contato, parece que eu te conheço há muito mais tempo.',
      sender: 'her',
      delay: 500
    },
    {
      text: 'Pode até parecer cedo pelo que vou dizer agora, e espero de coração que não te incomode ou soe precipitado...',
      sender: 'her',
      delay: 4000
    },
    {
      text: 'Mas eu te amo. Muito. ❤',
      sender: 'her',
      delay: 3000
    },
    {
      text: 'Kkkkk em que mundo vc ouvir da mulher que vc é completamente apaixonado que ela te ama pode se tornar algo que ruim, algo que incomode, não tem como kkk',
      sender: 'him',
      delay: 5000
    },
    {
      text: 'Eu sou mt sentimento e conexão, e eu nunca senti algo tão forte por alguém em tão pouco tempo como eu sinto por vc, de fato parece que a gnt se conhece a anos, parece que já vivemos tanto, que nos conhecemos tanto, as vezes parece um sonho, parece que a qualquer momento eu vou acordar com o despertador tocando e perceber que td isso só aconteceu na minha mente',
      sender: 'him',
      delay: 6000
    },
    {
      text: 'como eu disse eu sou sentimento e sinto por vc desde o primeiro olhar que a gnt trocou, eu já sei que te amo desde o primeiro dia que nos vimos e eu posso provar kk eu já sei que te amo desde o primeiro sorriso que eu vi de perto, já sei que te amo desde a primeira vez que olhei no fundo dos seus olhos e vi quem vc é',
      sender: 'him',
      delay: 6000
    },
    {
      text: 'eu não queria te assustar, ia tentar aguentar pelo menos até o pedido, mas que bom que não preciso mais segurar isso…',
      sender: 'him',
      delay: 4000
    },
    {
      text: 'Eu amo você minha linda 💜',
      sender: 'him',
      delay: 3000
    }
  ]
  
  // Calcular tempo total para todas as mensagens aparecerem
  let totalTime = 0
  messages.forEach(msg => {
    totalTime += msg.delay
  })
  
  // Fazer fade out do título após 4 segundos
  setTimeout(() => {
    title.style.opacity = '0'
    title.style.transition = 'opacity 1s ease-out'
    
    // Fazer fade in do container de mensagens
    setTimeout(() => {
      container.style.opacity = '1'
      container.style.transition = 'opacity 1s ease-in'
      
      // Criar todas as mensagens primeiro (invisíveis)
      const messageElements = []
      messages.forEach((msg) => {
        const messageDiv = document.createElement('div')
        messageDiv.className = `message-bubble ${msg.sender === 'her' ? 'bg-[#e1ffc7] text-[#000] self-start' : 'bg-[#1a6a5c] text-white self-end'} opacity-0`
        messageDiv.style.transition = 'opacity 0.5s ease-in, transform 0.5s ease-out'
        messageDiv.style.transform = 'translateY(10px)'
        
        const messageP = document.createElement('p')
        messageP.className = 'text-base md:text-lg leading-relaxed'
        messageP.textContent = msg.text
        
        messageDiv.appendChild(messageP)
        container.appendChild(messageDiv)
        messageElements.push(messageDiv)
      })
      
      // Animar mensagens sequencialmente (apenas fade in, sem scroll automático agressivo)
      let totalDelay = 0
      messageElements.forEach((messageDiv, index) => {
        totalDelay += messages[index].delay
        setTimeout(() => {
          messageDiv.style.opacity = '1'
          messageDiv.style.transform = 'translateY(0)'
          
          // Scroll suave apenas se a mensagem estiver fora da viewport
          setTimeout(() => {
            const rect = messageDiv.getBoundingClientRect()
            const containerRect = container.getBoundingClientRect()
            
            // Verificar se a mensagem está visível
            if (rect.bottom > containerRect.bottom || rect.top < containerRect.top) {
              messageDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
            }
          }, 200)
          
          // Se é a última mensagem, habilitar scroll após um pequeno delay
          if (index === messageElements.length - 1) {
            setTimeout(() => {
              messagesLoadingComplete = true
              container.style.overflow = 'auto'
              container.style.pointerEvents = 'auto'
            }, 500) // Pequeno delay após a última mensagem aparecer
          }
        }, totalDelay)
      })
    }, 1000) // Esperar 1s após fade out do título
  }, 3000) // Mostrar título por 3 segundos
}

// Configuração do mapa estelar (será atualizada via inputs)
let starMapConfig = {
  date: '2025-06-25',
  city: 'São Paulo',
  latitude: -23.5505,
  longitude: -46.6333,
  time: '20:00'
}

// Dados de estrelas principais (magnitude visível)
const brightStars = [
  { name: 'Sirius', ra: 101.287, dec: -16.716, mag: -1.46 },
  { name: 'Canopus', ra: 95.988, dec: -52.696, mag: -0.74 },
  { name: 'Arcturus', ra: 213.915, dec: 19.182, mag: -0.05 },
  { name: 'Vega', ra: 279.235, dec: 38.784, mag: 0.03 },
  { name: 'Capella', ra: 79.172, dec: 45.998, mag: 0.08 },
  { name: 'Rigel', ra: 78.634, dec: -8.202, mag: 0.13 },
  { name: 'Procyon', ra: 114.825, dec: 5.225, mag: 0.34 },
  { name: 'Betelgeuse', ra: 88.793, dec: 7.407, mag: 0.45 },
  { name: 'Achernar', ra: 24.429, dec: -57.237, mag: 0.46 },
  { name: 'Hadar', ra: 210.956, dec: -60.373, mag: 0.61 },
  { name: 'Altair', ra: 297.695, dec: 8.868, mag: 0.76 },
  { name: 'Aldebaran', ra: 68.980, dec: 16.509, mag: 0.87 },
  { name: 'Antares', ra: 247.352, dec: -26.432, mag: 0.96 },
  { name: 'Spica', ra: 201.298, dec: -11.161, mag: 0.98 },
  { name: 'Pollux', ra: 116.329, dec: 28.026, mag: 1.14 },
  { name: 'Fomalhaut', ra: 344.413, dec: -29.622, mag: 1.16 },
  { name: 'Deneb', ra: 310.358, dec: 45.280, mag: 1.25 },
  { name: 'Mimosa', ra: 191.930, dec: -59.689, mag: 1.25 },
  { name: 'Regulus', ra: 152.093, dec: 11.967, mag: 1.36 },
  { name: 'Adhara', ra: 104.656, dec: -28.972, mag: 1.50 }
]

// Dados de constelações (estrelas principais e suas conexões)
const constellations = {
  'Órion': {
    stars: ['Rigel', 'Betelgeuse', 'Aldebaran'],
    connections: [
      ['Rigel', 'Betelgeuse'],
      ['Betelgeuse', 'Aldebaran']
    ],
    meaning: 'Órion, o Caçador, é uma das constelações mais reconhecidas. Na mitologia, representa força e determinação. Ver Órion no céu simboliza novos começos e a busca por seus objetivos com coragem.',
    season: 'inverno'
  },
  'Triângulo de Verão': {
    stars: ['Vega', 'Altair', 'Deneb'],
    connections: [
      ['Vega', 'Altair'],
      ['Altair', 'Deneb'],
      ['Deneb', 'Vega']
    ],
    meaning: 'O Triângulo de Verão é formado por três das estrelas mais brilhantes do céu. Representa harmonia, equilíbrio e a conexão entre diferentes pontos que formam algo maior e mais belo.',
    season: 'verão'
  },
  'Cão Maior': {
    stars: ['Sirius', 'Adhara'],
    connections: [
      ['Sirius', 'Adhara']
    ],
    meaning: 'Cão Maior abriga Sirius, a estrela mais brilhante do céu. Simboliza lealdade, proteção e a luz que guia nos momentos mais escuros. Ver Sirius é um sinal de esperança e direção.',
    season: 'inverno'
  },
  'Cão Menor': {
    stars: ['Procyon'],
    connections: [],
    meaning: 'Cão Menor, com Procyon, representa companheirismo e fidelidade. É a constelação que acompanha Órion, simbolizando que não estamos sozinhos em nossa jornada.',
    season: 'inverno'
  },
  'Boiadeiro': {
    stars: ['Arcturus'],
    connections: [],
    meaning: 'Boiadeiro, com Arcturus, representa proteção e cuidado. Na mitologia, é o guardião que vigia e protege. Ver Arcturus no céu simboliza segurança e estabilidade.',
    season: 'primavera'
  },
  'Escorpião': {
    stars: ['Antares'],
    connections: [],
    meaning: 'Escorpião, com Antares (a estrela rival de Marte), representa transformação e renovação. Simboliza a capacidade de superar desafios e renascer mais forte.',
    season: 'verão'
  },
  'Leão': {
    stars: ['Regulus'],
    connections: [],
    meaning: 'Leão, com Regulus (o coração do leão), representa coragem, liderança e nobreza. Ver Regulus no céu simboliza força interior e a coragem de seguir seu coração.',
    season: 'primavera'
  },
  'Virgem': {
    stars: ['Spica'],
    connections: [],
    meaning: 'Virgem, com Spica, representa pureza, sabedoria e crescimento. Simboliza novos começos e o florescimento de algo belo e promissor.',
    season: 'primavera'
  },
  'Cisne': {
    stars: ['Deneb'],
    connections: [],
    meaning: 'Cisne, com Deneb, representa transformação e elevação. Na mitologia, o cisne voa alto e livre, simbolizando a capacidade de superar limitações e alcançar novos horizontes.',
    season: 'verão'
  },
  'Águia': {
    stars: ['Altair'],
    connections: [],
    meaning: 'Águia, com Altair, representa visão clara, liberdade e perspectiva elevada. Simboliza a capacidade de ver além e encontrar o caminho certo.',
    season: 'verão'
  },
  'Lira': {
    stars: ['Vega'],
    connections: [],
    meaning: 'Lira, com Vega, representa música, harmonia e arte. Na mitologia, é o instrumento de Orfeu, simbolizando o poder da música e da beleza para tocar corações.',
    season: 'verão'
  }
}

// Buscar dados históricos reais do clima usando Open-Meteo (gratuito, sem API key)
// Para datas passadas: usa histórico. Para hoje/futuro: usa previsão atual
async function getWeatherData(lat, lon, date) {
  try {
    const dateObj = new Date(date)
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    dateObj.setHours(0, 0, 0, 0)
    
    // Formatar data para API (YYYY-MM-DD)
    const dateStr = date.split('T')[0] // Garantir formato YYYY-MM-DD
    
    // Open-Meteo Historical Weather API (gratuita, sem API key)
    // Suporta dados históricos de 1940 até hoje
    const isHistorical = dateObj < today
    
    if (isHistorical) {
      // Dados históricos
      try {
        const response = await fetch(
          `https://archive-api.open-meteo.com/v1/archive?latitude=${lat}&longitude=${lon}&start_date=${dateStr}&end_date=${dateStr}&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=auto`
        )
        
        if (response.ok) {
          const data = await response.json()
          if (data.daily && data.daily.weather_code && data.daily.weather_code.length > 0) {
            const weatherCode = data.daily.weather_code[0]
            const tempMax = data.daily.temperature_2m_max[0]
            const tempMin = data.daily.temperature_2m_min[0]
            const avgTemp = Math.round((tempMax + tempMin) / 2)
            
            // Converter código WMO para condição
            const condition = convertWeatherCodeToCondition(weatherCode)
            const description = getWeatherDescription(weatherCode)
            
            return {
              temperature: avgTemp,
              description: description,
              icon: getWeatherIcon(condition),
              condition: condition
            }
          }
        }
      } catch (error) {
        console.warn('Erro ao buscar dados históricos, usando estimativa:', error)
      }
    } else {
      // Para hoje ou futuro, usar API atual (OpenWeatherMap requer API key)
      // Alternativa: usar Open-Meteo Forecast (gratuito)
      try {
        const response = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=auto&forecast_days=1`
        )
        
        if (response.ok) {
          const data = await response.json()
          if (data.daily && data.daily.weather_code && data.daily.weather_code.length > 0) {
            const weatherCode = data.daily.weather_code[0]
            const tempMax = data.daily.temperature_2m_max[0]
            const tempMin = data.daily.temperature_2m_min[0]
            const avgTemp = Math.round((tempMax + tempMin) / 2)
            
            const condition = convertWeatherCodeToCondition(weatherCode)
            const description = getWeatherDescription(weatherCode)
            
            return {
              temperature: avgTemp,
              description: description,
              icon: getWeatherIcon(condition),
              condition: condition
            }
          }
        }
      } catch (error) {
        console.warn('Erro ao buscar previsão, usando estimativa:', error)
      }
    }
    
    // Fallback: estimar baseado na latitude e época do ano
    return getEstimatedTemperature(lat, date)
  } catch (error) {
    console.error('Erro ao buscar dados do clima:', error)
    return getEstimatedTemperature(lat, date)
  }
}

// Converter código WMO (World Meteorological Organization) para condição
function convertWeatherCodeToCondition(code) {
  // Códigos WMO: https://open-meteo.com/en/docs
  // 0 = Clear sky
  // 1-3 = Mainly clear, partly cloudy, overcast
  // 45-48 = Fog
  // 51-67 = Drizzle/Rain
  // 71-77 = Snow
  // 80-99 = Rain showers/Thunderstorm
  
  if (code === 0) return 'Clear'
  if (code >= 1 && code <= 3) return 'Clouds'
  if (code >= 45 && code <= 48) return 'Clouds' // Fog tratado como nublado
  if (code >= 51 && code <= 67) return 'Rain'
  if (code >= 71 && code <= 77) return 'Snow'
  if (code >= 80 && code <= 99) return 'Rain'
  
  return 'Clouds' // Default
}

// Obter descrição do clima em português
function getWeatherDescription(code) {
  if (code === 0) return 'céu limpo'
  if (code >= 1 && code <= 3) return 'parcialmente nublado'
  if (code >= 45 && code <= 48) return 'névoa'
  if (code >= 51 && code <= 55) return 'garoa'
  if (code >= 56 && code <= 57) return 'garoa congelante'
  if (code >= 61 && code <= 67) return 'chuva'
  if (code >= 71 && code <= 77) return 'neve'
  if (code >= 80 && code <= 82) return 'aguaceiros'
  if (code >= 85 && code <= 86) return 'neve'
  if (code >= 95 && code <= 99) return 'trovoada'
  
  return 'variável'
}

// Obter ícone baseado na condição
function getWeatherIcon(condition) {
  if (condition === 'Clear') return '01d'
  if (condition === 'Clouds') return '02d'
  if (condition === 'Rain') return '10d'
  if (condition === 'Snow') return '13d'
  return '02d'
}

// Estimar temperatura baseada na latitude e época do ano
function getEstimatedTemperature(lat, date) {
  const dateObj = new Date(date)
  const month = dateObj.getMonth() + 1 // 1-12
  
  // Temperatura base considerando latitude (mais quente perto do equador)
  let baseTemp = 20
  
  // Ajuste por latitude (Brasil está entre -5 e -33)
  if (lat > -15) baseTemp = 28 // Norte
  else if (lat > -23) baseTemp = 22 // Centro
  else baseTemp = 18 // Sul
  
  // Ajuste sazonal (junho = inverno no hemisfério sul)
  const seasonalAdjustment = {
    1: 3, 2: 2, 3: 0, 4: -2, 5: -4, 6: -5, // Verão a inverno
    7: -4, 8: -2, 9: 0, 10: 2, 11: 3, 12: 3
  }
  
  const temp = baseTemp + (seasonalAdjustment[month] || 0)
  
  // Determinar condição do tempo baseada na época
  let condition = 'Clear'
  let description = 'céu limpo'
  
  // Inverno tende a ser mais seco, verão mais úmido
  if (month >= 6 && month <= 8) {
    // Inverno - mais chance de céu limpo
    condition = Math.random() > 0.3 ? 'Clear' : 'Clouds'
    description = condition === 'Clear' ? 'céu limpo' : 'parcialmente nublado'
  } else {
    // Outras estações - mais variado
    const rand = Math.random()
    if (rand > 0.6) {
      condition = 'Clear'
      description = 'céu limpo'
    } else if (rand > 0.3) {
      condition = 'Clouds'
      description = 'parcialmente nublado'
    } else {
      condition = 'Rain'
      description = 'chuva'
    }
  }
  
  return {
    temperature: Math.round(temp),
    description: description,
    icon: condition === 'Clear' ? '01d' : condition === 'Clouds' ? '02d' : '10d',
    condition: condition
  }
}

// Determinar cores do céu baseado no horário e condições do tempo
function getSkyColors(time, weatherCondition) {
  const [hours, minutes] = time.split(':').map(Number)
  const hour = hours + minutes / 60
  
  // Determinar período do dia
  let period = 'night' // madrugada/noite
  if (hour >= 5 && hour < 7) period = 'dawn' // amanhecer
  else if (hour >= 7 && hour < 18) period = 'day' // dia
  else if (hour >= 18 && hour < 20) period = 'dusk' // entardecer
  
  const colors = {
    // Madrugada/Noite (20:00 - 5:00)
    night: {
      base: '#0a0a1a',
      gradient: [
        { stop: 0, color: 'rgba(138, 43, 226, 0.1)' }, // roxo suave
        { stop: 1, color: 'rgba(0, 0, 0, 0.9)' }
      ],
      starsVisible: true
    },
    // Amanhecer (5:00 - 7:00)
    dawn: {
      base: weatherCondition === 'Clear' ? '#1a1a3e' : '#2a2a4e',
      gradient: weatherCondition === 'Clear' ? [
        { stop: 0, color: 'rgba(255, 140, 0, 0.3)' }, // laranja
        { stop: 0.5, color: 'rgba(255, 200, 100, 0.2)' }, // amarelo claro
        { stop: 1, color: 'rgba(50, 50, 100, 0.8)' } // azul escuro
      ] : [
        { stop: 0, color: 'rgba(150, 150, 180, 0.4)' }, // cinza azulado
        { stop: 1, color: 'rgba(50, 50, 80, 0.9)' }
      ],
      starsVisible: hour < 6
    },
    // Dia (7:00 - 18:00)
    day: {
      base: weatherCondition === 'Clear' ? '#87CEEB' : weatherCondition === 'Clouds' ? '#B0C4DE' : '#708090',
      gradient: weatherCondition === 'Clear' ? [
        { stop: 0, color: 'rgba(135, 206, 250, 0.8)' }, // azul céu claro
        { stop: 0.3, color: 'rgba(173, 216, 230, 0.6)' }, // azul claro
        { stop: 1, color: 'rgba(70, 130, 180, 0.4)' } // azul aço
      ] : weatherCondition === 'Clouds' ? [
        { stop: 0, color: 'rgba(176, 196, 222, 0.7)' }, // cinza azulado
        { stop: 1, color: 'rgba(105, 105, 105, 0.5)' } // cinza
      ] : [
        { stop: 0, color: 'rgba(112, 128, 144, 0.8)' }, // cinza chumbo
        { stop: 1, color: 'rgba(70, 70, 70, 0.6)' } // cinza escuro
      ],
      starsVisible: false
    },
    // Entardecer (18:00 - 20:00)
    dusk: {
      base: weatherCondition === 'Clear' ? '#2a1a3e' : '#3a2a4e',
      gradient: weatherCondition === 'Clear' ? [
        { stop: 0, color: 'rgba(255, 69, 0, 0.4)' }, // laranja vermelho
        { stop: 0.3, color: 'rgba(255, 140, 0, 0.3)' }, // laranja
        { stop: 0.7, color: 'rgba(138, 43, 226, 0.2)' }, // roxo
        { stop: 1, color: 'rgba(0, 0, 0, 0.8)' } // preto
      ] : [
        { stop: 0, color: 'rgba(150, 120, 150, 0.4)' }, // roxo acinzentado
        { stop: 1, color: 'rgba(50, 50, 80, 0.9)' }
      ],
      starsVisible: hour > 19
    }
  }
  
  return colors[period]
}

// Desenhar o sol baseado no horário
function drawSun(ctx, width, height, hour) {
  // Calcular posição do sol baseado no horário
  // 7h = esquerda, 12h = centro, 17h = direita
  const sunProgress = (hour - 7) / 10 // 0 a 1 (7h a 17h)
  const sunX = width * 0.15 + (width * 0.7 * sunProgress) // 15% a 85% da largura
  const sunY = height * 0.25 // 25% da altura (acima do horizonte)
  
  const sunRadius = 60
  const glowRadius = sunRadius * 2.5
  
  // Brilho externo do sol
  const sunGlow = ctx.createRadialGradient(sunX, sunY, 0, sunX, sunY, glowRadius)
  sunGlow.addColorStop(0, 'rgba(255, 255, 200, 0.8)')
  sunGlow.addColorStop(0.3, 'rgba(255, 200, 100, 0.6)')
  sunGlow.addColorStop(0.6, 'rgba(255, 150, 50, 0.3)')
  sunGlow.addColorStop(1, 'rgba(255, 100, 0, 0)')
  
  ctx.fillStyle = sunGlow
  ctx.beginPath()
  ctx.arc(sunX, sunY, glowRadius, 0, Math.PI * 2)
  ctx.fill()
  
  // Sol principal
  const sunGradient = ctx.createRadialGradient(sunX, sunY, 0, sunX, sunY, sunRadius)
  sunGradient.addColorStop(0, '#FFD700')
  sunGradient.addColorStop(0.7, '#FFA500')
  sunGradient.addColorStop(1, '#FF8C00')
  
  ctx.fillStyle = sunGradient
  ctx.beginPath()
  ctx.arc(sunX, sunY, sunRadius, 0, Math.PI * 2)
  ctx.fill()
  
  // Brilho interno
  ctx.fillStyle = 'rgba(255, 255, 255, 0.6)'
  ctx.beginPath()
  ctx.arc(sunX, sunY, sunRadius * 0.6, 0, Math.PI * 2)
  ctx.fill()
}

// Desenhar chuva
let rainAnimationFrame = 0
function drawRain(ctx, width, height) {
  rainAnimationFrame += 0.3
  ctx.save()
  
  // Desenhar gotas de chuva
  const dropCount = 200
  const dropSpeed = 8
  
  for (let i = 0; i < dropCount; i++) {
    const baseX = (width / dropCount) * i
    const offsetX = (rainAnimationFrame * dropSpeed * (1 + (i % 3))) % width
    const x = baseX + offsetX
    
    const baseY = -20 + (i % 5) * 30
    const offsetY = (rainAnimationFrame * dropSpeed * (1 + (i % 3))) % (height + 40)
    const y = baseY + offsetY
    
    const length = 15 + (i % 3) * 5
    const opacity = 0.6 + (i % 2) * 0.2
    
    ctx.strokeStyle = `rgba(173, 216, 230, ${opacity})`
    ctx.lineWidth = 2
    ctx.beginPath()
    ctx.moveTo(x, y)
    ctx.lineTo(x, y + length)
    ctx.stroke()
  }
  
  ctx.restore()
}

// Desenhar nuvens em movimento (melhorado)
let cloudAnimationFrame = 0
let lastCloudPositions = [] // Armazenar posições anteriores das nuvens
let cloudAnimationStartTime = null // Tempo de início da animação para fade in

function drawClouds(ctx, width, height, weatherCondition, isAnimation = false) {
  // Inicializar tempo de início se for a primeira vez
  if (cloudAnimationStartTime === null) {
    cloudAnimationStartTime = Date.now()
  }
  
  cloudAnimationFrame += 0.08 // Velocidade das nuvens (reduzida para movimento mais lento)
  
  const cloudCount = weatherCondition === 'Clouds' ? 6 : weatherCondition === 'Rain' ? 10 : 3
  const cloudOpacity = weatherCondition === 'Clouds' ? 0.7 : weatherCondition === 'Rain' ? 0.85 : 0.4
  
  // Se for animação, redesenhar o fundo do céu primeiro para limpar as nuvens antigas
  if (isAnimation) {
    // Redesenhar o fundo do céu na área das nuvens
    // Usar o horário atual do starMapConfig para garantir que está atualizado
    const [hours, minutes] = starMapConfig.time.split(':').map(Number)
    const hour = hours + minutes / 60
    const isDay = hour >= 7 && hour < 15.5
    const isAfternoon = hour >= 15.5 && hour < 18
    const isDusk = hour >= 18 && hour < 20 // Entardecer também precisa redesenhar fundo
    
    // Buscar condição do tempo atualizada se disponível
    const currentWeatherCondition = currentCloudConfig?.weatherCondition || weatherCondition
    
    if (isDay || isAfternoon || isDusk) {
      // Redesenhar o gradiente do dia/entardecer em toda a tela para evitar linhas
      const skyGradient = ctx.createLinearGradient(0, 0, 0, height)
      
      if (isDay) {
        // Durante o dia - usar os mesmos valores do gradiente principal
        if (currentWeatherCondition === 'Clear') {
          skyGradient.addColorStop(0, '#87CEEB')
          skyGradient.addColorStop(0.5, '#87CEEB')
          skyGradient.addColorStop(0.8, '#B0D4E6')
          skyGradient.addColorStop(1, '#C8E0F0')
        } else if (currentWeatherCondition === 'Clouds') {
          skyGradient.addColorStop(0, '#B0C4DE')
          skyGradient.addColorStop(0.5, '#B8C8E0')
          skyGradient.addColorStop(0.8, '#C0D0E0')
          skyGradient.addColorStop(1, '#C8D8E8')
        } else {
          skyGradient.addColorStop(0, '#708090')
          skyGradient.addColorStop(0.5, '#788898')
          skyGradient.addColorStop(0.8, '#8898A8')
          skyGradient.addColorStop(1, '#98A8B8')
        }
      } else if (isAfternoon) {
        // Tarde - transição gradual (simplificada para animação)
        const afternoonProgress = (hour - 15.5) / 2.5
        const lerpColor = (c1, c2, t) => {
          const h1 = c1.replace('#', ''), h2 = c2.replace('#', '')
          const r1 = parseInt(h1.substr(0, 2), 16), g1 = parseInt(h1.substr(2, 2), 16), b1 = parseInt(h1.substr(4, 2), 16)
          const r2 = parseInt(h2.substr(0, 2), 16), g2 = parseInt(h2.substr(2, 2), 16), b2 = parseInt(h2.substr(4, 2), 16)
          const r = Math.round(r1 + (r2 - r1) * t), g = Math.round(g1 + (g2 - g1) * t), b = Math.round(b1 + (b2 - b1) * t)
          return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`
        }
        if (currentWeatherCondition === 'Clear') {
          skyGradient.addColorStop(0, lerpColor('#87CEEB', '#FF8C42', afternoonProgress))
          skyGradient.addColorStop(0.5, lerpColor('#B0D4E6', '#FF7F50', afternoonProgress))
          skyGradient.addColorStop(0.8, lerpColor('#B0D4E6', '#FF6347', afternoonProgress))
          skyGradient.addColorStop(1, lerpColor('#C8E0F0', '#FF6B6B', afternoonProgress))
        } else if (currentWeatherCondition === 'Clouds') {
          skyGradient.addColorStop(0, lerpColor('#B0C4DE', '#FFA07A', afternoonProgress))
          skyGradient.addColorStop(0.5, lerpColor('#B8C8E0', '#FF8C69', afternoonProgress))
          skyGradient.addColorStop(0.8, lerpColor('#C0D0E0', '#A0522D', afternoonProgress))
          skyGradient.addColorStop(1, lerpColor('#C8D8E8', '#CD5C5C', afternoonProgress))
        } else {
          skyGradient.addColorStop(0, lerpColor('#708090', '#D2691E', afternoonProgress))
          skyGradient.addColorStop(0.5, lerpColor('#788898', '#CD853F', afternoonProgress))
          skyGradient.addColorStop(0.8, lerpColor('#8898A8', '#8B4513', afternoonProgress))
          skyGradient.addColorStop(1, lerpColor('#98A8B8', '#A0522D', afternoonProgress))
        }
      } else if (isDusk) {
        // Durante o entardecer - usar os mesmos valores do gradiente principal
        if (currentWeatherCondition === 'Clear') {
          skyGradient.addColorStop(0, '#FF8C42')
          skyGradient.addColorStop(0.2, '#FF7F50')
          skyGradient.addColorStop(0.4, '#FF6B6B')
          skyGradient.addColorStop(0.6, '#FF6347')
          skyGradient.addColorStop(0.75, '#FF4500')
          skyGradient.addColorStop(0.85, '#DC143C')
          skyGradient.addColorStop(0.95, '#8B0000')
          skyGradient.addColorStop(1, '#6B0000')
        } else if (currentWeatherCondition === 'Clouds') {
          skyGradient.addColorStop(0, '#FFA07A')
          skyGradient.addColorStop(0.3, '#FF8C69')
          skyGradient.addColorStop(0.5, '#CD5C5C')
          skyGradient.addColorStop(0.7, '#A0522D')
          skyGradient.addColorStop(0.85, '#8B4513')
          skyGradient.addColorStop(1, '#654321')
        } else {
          skyGradient.addColorStop(0, '#D2691E')
          skyGradient.addColorStop(0.3, '#CD853F')
          skyGradient.addColorStop(0.5, '#A0522D')
          skyGradient.addColorStop(0.7, '#8B4513')
          skyGradient.addColorStop(0.85, '#654321')
          skyGradient.addColorStop(1, '#4B2C1A')
        }
      }
      
      ctx.fillStyle = skyGradient
      ctx.fillRect(0, 0, width, height) // Redesenhar toda a altura para evitar linhas
    }
  }
  
  // Calcular fade in baseado no tempo decorrido
  const elapsedTime = Date.now() - cloudAnimationStartTime
  const fadeInDuration = 2000 // 2 segundos para fade in completo
  const fadeInProgress = Math.min(1, elapsedTime / fadeInDuration)
  
  for (let i = 0; i < cloudCount; i++) {
    // Posição baseada no índice para distribuição mais natural
    const baseX = (width / (cloudCount + 1)) * (i + 1)
    const speed = 5 + (i % 3) * 3 // Velocidades variadas (reduzidas)
    const offsetX = (cloudAnimationFrame * speed) % (width + 300) - 150
    const x = baseX + offsetX
    
    // Altura variada com movimento suave vertical (ondulação)
    // Garantir que a altura base seja consistente e não dependa de condições que mudam
    const baseY = height * (0.12 + (i % 4) * 0.12)
    const verticalOffset = Math.sin(cloudAnimationFrame * 0.05 + i * 0.5) * 15 // Reduzido de 0.08 para 0.05
    const y = Math.max(0, Math.min(height * 0.6, baseY + verticalOffset)) // Limitar altura para evitar deformação
    
    // Tamanho variado para criar variedade visual - manter proporções
    const sizeVariation = Math.sin(cloudAnimationFrame * 0.03 + i) * 15 // Reduzido de 0.05 para 0.03
    const baseSize = 100 + (i % 3) * 50
    const size = Math.max(60, Math.min(200, baseSize + sizeVariation)) // Limitar tamanho para evitar deformação extrema
    
    // Opacidade com fade in + variação sutil para profundidade
    const opacityVariation = 0.9 + Math.sin(cloudAnimationFrame * 0.05 + i) * 0.1 // Reduzido de 0.1 para 0.05
    const baseOpacity = cloudOpacity * opacityVariation
    // Aplicar fade in: começa em 0 e aumenta gradualmente até baseOpacity
    const fadeInOpacity = baseOpacity * fadeInProgress
    // Adicionar delay escalonado para cada nuvem (aparecem uma após a outra)
    const cloudDelay = (i * 200) / fadeInDuration // Delay de 200ms entre cada nuvem
    const cloudFadeIn = Math.max(0, Math.min(1, (fadeInProgress - cloudDelay) / (1 - cloudDelay)))
    const finalOpacity = Math.max(0, Math.min(1, baseOpacity * cloudFadeIn))
    
    // Garantir que o contexto não está transformado antes de desenhar
    ctx.save()
    drawCloud(ctx, x, y, size, finalOpacity)
    ctx.restore()
  }
}

// Desenhar uma nuvem individual (melhorada)
function drawCloud(ctx, x, y, size, opacity) {
  ctx.save()
  ctx.globalAlpha = opacity
  
  // Criar gradiente para dar profundidade à nuvem
  const cloudGradient = ctx.createRadialGradient(x, y - size * 0.2, 0, x, y, size)
  cloudGradient.addColorStop(0, `rgba(255, 255, 255, ${opacity * 0.95})`)
  cloudGradient.addColorStop(0.5, `rgba(255, 255, 255, ${opacity * 0.8})`)
  cloudGradient.addColorStop(1, `rgba(240, 240, 250, ${opacity * 0.6})`)
  
  // Nuvem formada por múltiplos círculos sobrepostos para criar forma orgânica
  const circles = [
    // Centro principal
    { x: x, y: y, r: size * 0.65 },
    // Lados
    { x: x - size * 0.45, y: y, r: size * 0.55 },
    { x: x + size * 0.45, y: y, r: size * 0.55 },
    // Topo
    { x: x - size * 0.25, y: y - size * 0.25, r: size * 0.5 },
    { x: x + size * 0.25, y: y - size * 0.25, r: size * 0.5 },
    { x: x, y: y - size * 0.3, r: size * 0.45 },
    // Base (mais suave)
    { x: x - size * 0.35, y: y + size * 0.15, r: size * 0.4 },
    { x: x + size * 0.35, y: y + size * 0.15, r: size * 0.4 },
    // Detalhes laterais
    { x: x - size * 0.6, y: y - size * 0.1, r: size * 0.35 },
    { x: x + size * 0.6, y: y - size * 0.1, r: size * 0.35 }
  ]
  
  // Desenhar círculos com gradiente
  circles.forEach((circle, index) => {
    const circleGradient = ctx.createRadialGradient(
      circle.x, circle.y - circle.r * 0.3, 0,
      circle.x, circle.y, circle.r
    )
    circleGradient.addColorStop(0, `rgba(255, 255, 255, ${opacity * 0.9})`)
    circleGradient.addColorStop(0.6, `rgba(255, 255, 255, ${opacity * 0.7})`)
    circleGradient.addColorStop(1, `rgba(240, 240, 250, ${opacity * 0.4})`)
    
    ctx.fillStyle = circleGradient
    ctx.beginPath()
    ctx.arc(circle.x, circle.y, circle.r, 0, Math.PI * 2)
    ctx.fill()
  })
  
  // Adicionar sombra sutil na parte inferior para dar profundidade
  ctx.fillStyle = `rgba(200, 200, 220, ${opacity * 0.2})`
  ctx.beginPath()
  ctx.ellipse(x, y + size * 0.3, size * 0.7, size * 0.2, 0, 0, Math.PI * 2)
  ctx.fill()
  
  ctx.restore()
}

// Determinar estação do ano baseada na data
function getSeason(dateString) {
  const [year, month, day] = dateString.split('-').map(Number)
  // Hemisfério Sul (Brasil)
  // Verão: Dez, Jan, Fev (12, 1, 2)
  // Outono: Mar, Abr, Mai (3, 4, 5)
  // Inverno: Jun, Jul, Ago (6, 7, 8)
  // Primavera: Set, Out, Nov (9, 10, 11)
  if (month === 12 || month === 1 || month === 2) return 'verão'
  if (month === 3 || month === 4 || month === 5) return 'outono'
  if (month === 6 || month === 7 || month === 8) return 'inverno'
  if (month === 9 || month === 10 || month === 11) return 'primavera'
  return 'verão' // fallback
}

// Identificar constelação mais visível no céu
function getMostVisibleConstellation(visibleStars, dateString) {
  const constellationScores = {}
  const currentSeason = getSeason(dateString)
  
  Object.keys(constellations).forEach(constellationName => {
    const constellation = constellations[constellationName]
    let score = 0
    let visibleCount = 0
    
    constellation.stars.forEach(starName => {
      const star = visibleStars.find(s => s.name === starName)
      if (star) {
        visibleCount++
        // Pontuar baseado na magnitude (mais brilhante = mais pontos)
        score += (2 - star.mag) * 10
      }
    })
    
    // Bônus se todas as estrelas principais estão visíveis
    if (visibleCount === constellation.stars.length && constellation.stars.length > 0) {
      score += 50
    }
    
    // Bônus se tem conexões (constelação completa)
    if (constellation.connections.length > 0) {
      score += 30
    }
    
    // BÔNUS CRÍTICO: Priorizar constelações da estação atual
    // Constelações da estação atual recebem bônus significativo
    if (constellation.season === currentSeason) {
      score += 100 // Bônus alto para constelações da estação
    } else {
      // Penalizar constelações de outras estações (mas não eliminar completamente)
      score *= 0.3 // Reduzir pontuação para 30% se não for da estação
    }
    
    // Só considerar constelações com pelo menos uma estrela visível
    if (visibleCount > 0) {
      constellationScores[constellationName] = {
        score,
        visibleCount,
        totalStars: constellation.stars.length,
        constellation
      }
    }
  })
  
  // Encontrar constelação com maior pontuação
  let maxScore = 0
  let mostVisible = null
  
  Object.keys(constellationScores).forEach(name => {
    if (constellationScores[name].score > maxScore) {
      maxScore = constellationScores[name].score
      mostVisible = name
    }
  })
  
  return mostVisible ? {
    name: mostVisible,
    ...constellationScores[mostVisible]
  } : null
}

// Formatar data sem problemas de timezone
function formatDate(dateString) {
  const [year, month, day] = dateString.split('-').map(Number)
  return `${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year}`
}

// Lista de cidades conhecidas como fallback
const knownCities = {
  'são paulo': { lat: -23.5505, lon: -46.6333, name: 'São Paulo, SP, Brasil' },
  'sao paulo': { lat: -23.5505, lon: -46.6333, name: 'São Paulo, SP, Brasil' },
  'rio de janeiro': { lat: -22.9068, lon: -43.1729, name: 'Rio de Janeiro, RJ, Brasil' },
  'rio': { lat: -22.9068, lon: -43.1729, name: 'Rio de Janeiro, RJ, Brasil' },
  'belo horizonte': { lat: -19.9167, lon: -43.9345, name: 'Belo Horizonte, MG, Brasil' },
  'brasília': { lat: -15.7942, lon: -47.8822, name: 'Brasília, DF, Brasil' },
  'brasilia': { lat: -15.7942, lon: -47.8822, name: 'Brasília, DF, Brasil' },
  'salvador': { lat: -12.9714, lon: -38.5014, name: 'Salvador, BA, Brasil' },
  'curitiba': { lat: -25.4284, lon: -49.2733, name: 'Curitiba, PR, Brasil' },
  'fortaleza': { lat: -3.7172, lon: -38.5433, name: 'Fortaleza, CE, Brasil' },
  'recife': { lat: -8.0476, lon: -34.8770, name: 'Recife, PE, Brasil' },
  'porto alegre': { lat: -30.0346, lon: -51.2177, name: 'Porto Alegre, RS, Brasil' },
  'manaus': { lat: -3.1190, lon: -60.0217, name: 'Manaus, AM, Brasil' },
  'belém': { lat: -1.4558, lon: -48.5044, name: 'Belém, PA, Brasil' },
  'belem': { lat: -1.4558, lon: -48.5044, name: 'Belém, PA, Brasil' },
  'goiânia': { lat: -16.6864, lon: -49.2643, name: 'Goiânia, GO, Brasil' },
  'goiania': { lat: -16.6864, lon: -49.2643, name: 'Goiânia, GO, Brasil' },
  'guarulhos': { lat: -23.4538, lon: -46.5331, name: 'Guarulhos, SP, Brasil' },
  'campinas': { lat: -22.9056, lon: -47.0608, name: 'Campinas, SP, Brasil' },
  'são luís': { lat: -2.5387, lon: -44.2825, name: 'São Luís, MA, Brasil' },
  'sao luis': { lat: -2.5387, lon: -44.2825, name: 'São Luís, MA, Brasil' },
  'maceió': { lat: -9.5713, lon: -36.7820, name: 'Maceió, AL, Brasil' },
  'maceio': { lat: -9.5713, lon: -36.7820, name: 'Maceió, AL, Brasil' },
  'natal': { lat: -5.7945, lon: -35.2110, name: 'Natal, RN, Brasil' },
  'teresina': { lat: -5.0892, lon: -42.8019, name: 'Teresina, PI, Brasil' },
  'aracaju': { lat: -10.9091, lon: -37.0677, name: 'Aracaju, SE, Brasil' },
  'florianópolis': { lat: -27.5954, lon: -48.5480, name: 'Florianópolis, SC, Brasil' },
  'florianopolis': { lat: -27.5954, lon: -48.5480, name: 'Florianópolis, SC, Brasil' },
  'vitória': { lat: -20.3155, lon: -40.3128, name: 'Vitória, ES, Brasil' },
  'vitoria': { lat: -20.3155, lon: -40.3128, name: 'Vitória, ES, Brasil' },
  'joão pessoa': { lat: -7.1150, lon: -34.8611, name: 'João Pessoa, PB, Brasil' },
  'joao pessoa': { lat: -7.1150, lon: -34.8611, name: 'João Pessoa, PB, Brasil' },
  'cuiabá': { lat: -15.6014, lon: -56.0979, name: 'Cuiabá, MT, Brasil' },
  'cuiaba': { lat: -15.6014, lon: -56.0979, name: 'Cuiabá, MT, Brasil' },
  'campo grande': { lat: -20.4697, lon: -54.6201, name: 'Campo Grande, MS, Brasil' },
  'porto velho': { lat: -8.7619, lon: -63.9039, name: 'Porto Velho, RO, Brasil' },
  'boa vista': { lat: 2.8235, lon: -60.6758, name: 'Boa Vista, RR, Brasil' },
  'rio branco': { lat: -9.9747, lon: -67.8100, name: 'Rio Branco, AC, Brasil' },
  'macapá': { lat: 0.0349, lon: -51.0664, name: 'Macapá, AP, Brasil' },
  'macapa': { lat: 0.0349, lon: -51.0664, name: 'Macapá, AP, Brasil' },
  'palmas': { lat: -10.1844, lon: -48.3336, name: 'Palmas, TO, Brasil' }
}

// Buscar coordenadas da cidade usando API de geocodificação
async function getCityCoordinates(cityName) {
  try {
    const loading = document.getElementById('starMapLoading')
    if (loading) loading.style.display = 'block'
    
    // Normalizar nome da cidade para busca
    const normalizedCity = cityName.toLowerCase().trim()
    
    // Primeiro, tentar buscar na lista de cidades conhecidas
    if (knownCities[normalizedCity]) {
      const city = knownCities[normalizedCity]
      if (loading) loading.style.display = 'none'
      return {
        latitude: city.lat,
        longitude: city.lon,
        displayName: city.name
      }
    }
    
    // Se não encontrou na lista, tentar API (pode falhar por CORS)
    try {
      // Usar proxy CORS ou tentar diretamente
      const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(cityName)}&limit=1`
      )}`
      
      const response = await fetch(proxyUrl, {
        method: 'GET',
        headers: {
          'Accept': 'application/json'
        }
      })
      
      if (!response.ok) throw new Error('API não disponível')
      
      const proxyData = await response.json()
      const data = JSON.parse(proxyData.contents)
      
      if (loading) loading.style.display = 'none'
      
      if (data && data.length > 0) {
        return {
          latitude: parseFloat(data[0].lat),
          longitude: parseFloat(data[0].lon),
          displayName: data[0].display_name
        }
      }
    } catch (apiError) {
      // Se a API falhar, continuar para o fallback
      console.warn('API de geocodificação não disponível, usando fallback:', apiError)
    }
    
    // Fallback: usar coordenadas padrão (São Paulo)
    if (loading) loading.style.display = 'none'
    console.warn(`Cidade "${cityName}" não encontrada, usando coordenadas padrão (São Paulo)`)
    return {
      latitude: -23.5505,
      longitude: -46.6333,
      displayName: 'São Paulo, SP, Brasil (padrão)'
    }
  } catch (error) {
    const loading = document.getElementById('starMapLoading')
    if (loading) {
      loading.style.display = 'none'
    }
    console.error('Erro ao buscar coordenadas:', error)
    // Retornar coordenadas padrão em caso de erro
    return {
      latitude: -23.5505,
      longitude: -46.6333,
      displayName: 'São Paulo, SP, Brasil (padrão)'
    }
  }
}

// Handler para fechar ao clicar fora (variável global)
let outsideClickHandler = null

// Função global para fechar o modal de informações mobile
function closeInfoModal() {
  const infoMobile = document.getElementById('starMapInfoMobile')
  const infoMobileToggle = document.getElementById('starMapInfoToggle')
  const closeBtn = document.getElementById('starMapInfoCloseBtn')
  
  // Remover listener de clique fora
  if (outsideClickHandler) {
    document.removeEventListener('click', outsideClickHandler, true)
    outsideClickHandler = null
  }
  
  if (infoMobile) {
    // Garantir que a transição esteja aplicada
    infoMobile.style.transition = 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
    // Forçar reflow para garantir que a transição seja aplicada
    void infoMobile.offsetWidth
    // Deslizar para a direita (fora da tela) - mesma animação de quando abre
    infoMobile.classList.remove('translate-x-0')
    infoMobile.classList.add('translate-x-full')
  }
  
  // Esconder botão X com animação
  if (closeBtn) {
    closeBtn.style.transition = 'opacity 0.3s ease-out'
    closeBtn.style.opacity = '0'
    closeBtn.style.pointerEvents = 'none'
  }
  
  // Mostrar seta novamente após a animação de fechamento
    setTimeout(() => {
    if (infoMobileToggle) {
      infoMobileToggle.style.display = 'block'
      // Adicionar animação de entrada na seta
      infoMobileToggle.style.opacity = '0'
      setTimeout(() => {
        infoMobileToggle.style.transition = 'opacity 0.3s ease-in'
        infoMobileToggle.style.opacity = '1'
      }, 50)
    }
  }, 400)
}

// Configurar controles do mapa estelar
function setupStarMapControls() {
  const form = document.getElementById('starMapForm')
  const formMobile = document.getElementById('starMapFormMobileForm')
  const toggleBtn = document.getElementById('starMapToggleBtn')
  const toggleIcon = document.getElementById('starMapToggleIcon')
  const formMobileContainer = document.getElementById('starMapFormMobile')
  const infoMobile = document.getElementById('starMapInfoMobile')
  const infoMobileToggle = document.getElementById('starMapInfoToggle')
  
  // Toggle do formulário mobile
  if (toggleBtn && formMobileContainer && toggleIcon) {
    let isFormOpen = false
    toggleBtn.addEventListener('click', () => {
      isFormOpen = !isFormOpen
      if (isFormOpen) {
        formMobileContainer.classList.remove('scale-0', 'opacity-0')
        formMobileContainer.classList.add('scale-100', 'opacity-100')
        // Animação de rotação para virar ×
        toggleIcon.style.transition = 'transform 0.3s ease-in-out'
        toggleIcon.textContent = '+'
        setTimeout(() => {
          toggleIcon.style.transform = 'rotate(45deg)'
          setTimeout(() => {
            toggleIcon.textContent = '×'
            toggleIcon.style.transform = 'rotate(0deg)'
          }, 150)
        }, 10)
      } else {
        formMobileContainer.classList.remove('scale-100', 'opacity-100')
        formMobileContainer.classList.add('scale-0', 'opacity-0')
        // Animação de rotação para virar +
        toggleIcon.style.transition = 'transform 0.3s ease-in-out'
        toggleIcon.textContent = '×'
        setTimeout(() => {
          toggleIcon.style.transform = 'rotate(45deg)'
          setTimeout(() => {
            toggleIcon.textContent = '+'
            toggleIcon.style.transform = 'rotate(0deg)'
          }, 150)
        }, 10)
      }
    })
  }
  
  // Toggle do modal de informações mobile (seta externa)
  if (infoMobileToggle && infoMobile) {
    infoMobileToggle.addEventListener('click', () => {
      if (infoMobile.classList.contains('translate-x-full')) {
        // Abrir modal
        infoMobile.style.transition = 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
        infoMobile.classList.remove('translate-x-full')
        infoMobile.classList.add('translate-x-0')
        // Esconder seta quando abrir
        infoMobileToggle.style.display = 'none'
        // Mostrar botão X acima do modal
        const closeBtn = document.getElementById('starMapInfoCloseBtn')
        if (closeBtn) {
          closeBtn.style.opacity = '1'
          closeBtn.style.pointerEvents = 'auto'
        }
        
        // Adicionar listener para fechar ao clicar fora (após animação)
        setTimeout(() => {
          // Remover listener anterior se existir
          if (outsideClickHandler) {
            document.removeEventListener('click', outsideClickHandler, true)
          }
          
          outsideClickHandler = (e) => {
            // Verificar se o modal está aberto
            if (!infoMobile.classList.contains('translate-x-0')) {
              return
            }
            
            // Verificar se o clique foi fora do modal
            const clickedElement = e.target
            const isClickInsideModal = infoMobile.contains(clickedElement)
            const isClickOnCloseBtn = document.getElementById('starMapInfoCloseBtn')?.contains(clickedElement)
            const isClickOnToggle = infoMobileToggle?.contains(clickedElement)
            
            // Se clicou fora do modal, fechar
            if (!isClickInsideModal && !isClickOnCloseBtn && !isClickOnToggle && window.innerWidth < 768) {
              e.stopPropagation()
              closeInfoModal()
            }
          }
          document.addEventListener('click', outsideClickHandler, true)
        }, 400)
      }
    })
  }
  
  // Botão fechar dentro do modal (será inicializado quando o modal aparecer)
  
  // Elementos do formulário desktop
  const dateInput = document.getElementById('starMapDate')
  const timeInput = document.getElementById('starMapTime')
  const cityInput = document.getElementById('starMapCity')
  const updateBtn = document.getElementById('starMapUpdateBtn')
  const loading = document.getElementById('starMapLoading')
  
  // Elementos do formulário mobile
  const updateBtnMobile = document.getElementById('starMapUpdateBtnMobile')
  const loadingMobile = document.getElementById('starMapLoadingMobile')
  
  if (!form || !dateInput || !timeInput || !cityInput || !updateBtn) return
  
  // Garantir que os inputs de data e hora abram os seletores nativos
  dateInput.addEventListener('click', (e) => {
    e.stopPropagation()
    dateInput.showPicker?.()
  })
  
  dateInput.addEventListener('focus', () => {
    dateInput.showPicker?.()
  })
  
  timeInput.addEventListener('click', (e) => {
    e.stopPropagation()
    timeInput.showPicker?.()
  })
  
  timeInput.addEventListener('focus', () => {
    timeInput.showPicker?.()
  })
  
  // Handler compartilhado para ambos os formulários
  const handleFormSubmit = async (e, isMobile = false) => {
    e.preventDefault()
    
    // Buscar elementos mobile se necessário
    const dateInputMobileEl = isMobile ? document.getElementById('starMapDateMobile') : null
    const timeInputMobileEl = isMobile ? document.getElementById('starMapTimeMobile') : null
    const cityInputMobileEl = isMobile ? document.getElementById('starMapCityMobile') : null
    const updateBtnMobileEl = isMobile ? document.getElementById('starMapUpdateBtnMobile') : null
    const loadingMobileEl = isMobile ? document.getElementById('starMapLoadingMobile') : null
    
    const currentDateInput = isMobile ? dateInputMobileEl : dateInput
    const currentTimeInput = isMobile ? timeInputMobileEl : timeInput
    const currentCityInput = isMobile ? cityInputMobileEl : cityInput
    const currentUpdateBtn = isMobile ? updateBtnMobileEl : updateBtn
    const currentLoading = isMobile ? loadingMobileEl : loading
    
    if (!currentDateInput || !currentTimeInput || !currentCityInput || !currentUpdateBtn) return
    
    const city = currentCityInput.value.trim()
    const date = currentDateInput.value
    const time = currentTimeInput.value
    
    // Sincronizar com o outro formulário
    if (isMobile) {
      if (dateInput) dateInput.value = date
      if (timeInput) timeInput.value = time
      if (cityInput) cityInput.value = city
    } else {
      const dateInputMobileSync = document.getElementById('starMapDateMobile')
      const timeInputMobileSync = document.getElementById('starMapTimeMobile')
      const cityInputMobileSync = document.getElementById('starMapCityMobile')
      if (dateInputMobileSync) dateInputMobileSync.value = date
      if (timeInputMobileSync) timeInputMobileSync.value = time
      if (cityInputMobileSync) cityInputMobileSync.value = city
    }
    
    // Validação
    if (!city) {
      currentCityInput.setCustomValidity('Por favor, insira o nome da cidade')
      currentCityInput.reportValidity()
      return
    }
    currentCityInput.setCustomValidity('')
    
    if (!date) {
      currentDateInput.setCustomValidity('Por favor, selecione uma data')
      currentDateInput.reportValidity()
      return
    }
    currentDateInput.setCustomValidity('')
    
    // Desabilitar botão e mostrar loading
    currentUpdateBtn.disabled = true
    currentUpdateBtn.setAttribute('aria-busy', 'true')
    if (currentLoading) {
      currentLoading.classList.remove('hidden')
      currentLoading.textContent = 'Buscando coordenadas...'
    }
    
    const buttonIcon = currentUpdateBtn.querySelector('.star-map-button-icon')
    if (buttonIcon) buttonIcon.textContent = '⏳'
    
    try {
      // Buscar coordenadas (sempre retorna coordenadas, mesmo que padrão)
      const coords = await getCityCoordinates(city)
      
      // Sempre usar as coordenadas retornadas (pode ser padrão se a busca falhar)
      starMapConfig = {
        date: date,
        city: city,
        latitude: coords.latitude,
        longitude: coords.longitude,
        time: time || '20:00'
      }
      
      // Esconder textos e controles, destacar estrelas
      hideTextsAndShowStars()
      
      // Redesenhar o mapa com estrelas destacadas
      setTimeout(() => {
        animateStarMap(true) // true = modo destacado
        
        // Fechar formulário mobile APÓS as estrelas aparecerem
        if (isMobile && formMobileContainer) {
          setTimeout(() => {
            formMobileContainer.classList.remove('scale-100', 'opacity-100')
            formMobileContainer.classList.add('scale-0', 'opacity-0')
            if (toggleIcon) {
              toggleIcon.textContent = '+'
              toggleIcon.style.transform = 'rotate(0deg)'
            }
          }, 1000) // Aguardar 1s após iniciar a animação das estrelas
        }
    }, 500)
      
      // Mostrar controles novamente após 5 segundos
      if (starMapControlsTimer) {
        clearTimeout(starMapControlsTimer)
      }
      starMapControlsTimer = setTimeout(() => {
        showStarMapControls()
      }, 5000)

      if (buttonIcon) buttonIcon.textContent = '✓'
      if (currentLoading) {
        // Se usou coordenadas padrão, avisar o usuário
        if (coords.displayName && coords.displayName.includes('padrão')) {
          currentLoading.textContent = 'Cidade não encontrada. Usando coordenadas padrão.'
        } else {
          currentLoading.textContent = 'Céu atualizado com sucesso!'
        }
        currentLoading.classList.remove('hidden')
      }
      
    setTimeout(() => {
        if (buttonIcon) buttonIcon.textContent = '✨'
        if (currentLoading) currentLoading.classList.add('hidden')
      }, 2000)
    } catch (error) {
      console.error('Erro ao processar formulário:', error)
      if (buttonIcon) buttonIcon.textContent = '⚠️'
      if (currentLoading) {
        currentLoading.textContent = 'Erro ao processar. Tente novamente.'
        currentLoading.classList.remove('hidden')
      }
      
      setTimeout(() => {
        if (buttonIcon) buttonIcon.textContent = '✨'
        if (currentLoading) currentLoading.classList.add('hidden')
      }, 3000)('Erro ao atualizar mapa estelar:', error)
      if (buttonIcon) buttonIcon.textContent = '⚠️'
      if (currentLoading) {
        currentLoading.textContent = 'Erro ao processar. Tente novamente.'
        currentLoading.classList.remove('hidden')
      }
      
      setTimeout(() => {
        if (buttonIcon) buttonIcon.textContent = '✨'
        if (currentLoading) currentLoading.classList.add('hidden')
      }, 3000)
    } finally {
      currentUpdateBtn.disabled = false
      currentUpdateBtn.setAttribute('aria-busy', 'false')
    }
  }
  
  // Adicionar listeners aos formulários
  form.addEventListener('submit', (e) => handleFormSubmit(e, false))
  if (formMobile) {
    formMobile.addEventListener('submit', (e) => handleFormSubmit(e, true))
  }
}

// Variável para armazenar o timer de mostrar controles
let starMapControlsTimer = null
// Variável para controlar animação de nuvens
let cloudAnimationId = null
let currentCloudContext = null
let currentCloudConfig = null

// Esconder textos e controles, destacar estrelas
function hideTextsAndShowStars() {
  const textContainer = document.getElementById('starMapText')
  const controls = document.getElementById('starMapControls')
  
  // Limpar timer anterior se existir
  if (starMapControlsTimer) {
    clearTimeout(starMapControlsTimer)
    starMapControlsTimer = null
  }
  
  if (textContainer) {
    textContainer.classList.add('opacity-0', '-translate-y-5')
    textContainer.classList.remove('opacity-100', 'translate-y-0')
    setTimeout(() => {
      textContainer.classList.add('hidden')
    }, 1000)
  }
  
  if (controls) {
    controls.classList.add('opacity-0', 'translate-y-5')
    controls.classList.remove('opacity-100', 'translate-y-0')
    setTimeout(() => {
      controls.classList.add('hidden')
    }, 1000)
  }
  
  // Adicionar classe ao canvas para animação
  const canvas = document.getElementById('starMapCanvas')
  if (canvas) {
    canvas.classList.add('star-map-highlighted')
  }
  
  // Timer será configurado após a busca (3 segundos)
}

// Mostrar controles novamente
function showStarMapControls() {
  const controls = document.getElementById('starMapControls')
  
  if (controls) {
    controls.classList.remove('hidden')
    controls.classList.add('opacity-0', 'translate-y-5')
    controls.classList.remove('opacity-100', 'translate-y-0')
    
    // Animar entrada
    setTimeout(() => {
      controls.classList.remove('opacity-0', 'translate-y-5')
      controls.classList.add('opacity-100', 'translate-y-0')
    }, 50)
  }
}

// Restaurar textos e controles quando voltar ao slide
function restoreStarMapElements() {
  const textContainer = document.getElementById('starMapText')
  const controls = document.getElementById('starMapControls')
  const canvas = document.getElementById('starMapCanvas')
  
  // Limpar timer se existir
  if (starMapControlsTimer) {
    clearTimeout(starMapControlsTimer)
    starMapControlsTimer = null
  }
  
  // Restaurar textos
  if (textContainer) {
    textContainer.classList.remove('hidden')
    textContainer.classList.add('opacity-0', '-translate-y-5')
    textContainer.classList.remove('opacity-100', 'translate-y-0')
    
    setTimeout(() => {
      textContainer.classList.remove('opacity-0', '-translate-y-5')
      textContainer.classList.add('opacity-100', 'translate-y-0')
    }, 50)
  }
  
  // Restaurar controles
  if (controls) {
    controls.classList.remove('hidden')
    controls.classList.remove('opacity-0', 'translate-y-5')
    controls.classList.add('opacity-100', 'translate-y-0')
  }
  
  // Remover classe destacada do canvas
  if (canvas) {
    canvas.classList.remove('star-map-highlighted')
  }
}

async function animateStarMap(highlighted = false) {
  const canvas = document.getElementById('starMapCanvas')
  const info = document.getElementById('starMapInfo')
  
  if (!canvas) return
  
  // Salvar posição de scroll antes de redesenhar
  const scrollY = window.scrollY || window.pageYOffset
  
  const ctx = canvas.getContext('2d')
  const width = window.innerWidth
  const height = window.innerHeight
  
  // Garantir que o canvas está posicionado corretamente ANTES de redesenhar
  canvas.style.position = 'absolute'
  canvas.style.top = '0'
  canvas.style.left = '0'
  canvas.style.width = '100%'
  canvas.style.height = '100%'
  canvas.style.zIndex = '1'
  canvas.style.margin = '0'
  canvas.style.padding = '0'
  
  canvas.width = width
  canvas.height = height
  
  // Limpar canvas anterior completamente
  ctx.clearRect(0, 0, width, height)
  
  // Restaurar posição de scroll após um pequeno delay
  requestAnimationFrame(() => {
    if (scrollY !== (window.scrollY || window.pageYOffset)) {
      window.scrollTo(0, scrollY)
    }
  })
  
  // Buscar dados do tempo para determinar cores do céu
  const weatherData = await getWeatherData(starMapConfig.latitude, starMapConfig.longitude, starMapConfig.date).catch(() => 
    getEstimatedTemperature(starMapConfig.latitude, starMapConfig.date)
  )
  
  // Determinar cores do céu baseado no horário e condições
  const skyColors = getSkyColors(starMapConfig.time, weatherData.condition || 'Clear')
  const [hours, minutes] = starMapConfig.time.split(':').map(Number)
  const hour = hours + minutes / 60
  const isDay = hour >= 7 && hour < 15.5 // Dia até 15:30
  const isAfternoon = hour >= 15.5 && hour < 18 // Tarde (15:30 - 18:00) - transição para entardecer
  const isDusk = hour >= 18 && hour < 20 // Entardecer
  
  // Garantir que o canvas está posicionado corretamente
  if (canvas) {
    canvas.style.position = 'absolute'
    canvas.style.top = '0'
    canvas.style.left = '0'
    canvas.style.width = '100%'
    canvas.style.height = '100%'
    canvas.style.zIndex = '1'
  }
  
  // Fundo base - usar gradiente linear para dia, tarde e entardecer
  
  if (isDay || isAfternoon || isDusk) {
    // Para o dia, tarde e entardecer, usar gradiente linear de cima para baixo
    const skyGradient = ctx.createLinearGradient(0, 0, 0, height)
    
    if (isDay) {
      // Durante o dia
      if (weatherData.condition === 'Clear') {
        skyGradient.addColorStop(0, '#87CEEB') // azul céu claro no topo
        skyGradient.addColorStop(0.5, '#87CEEB') // manter azul céu no meio
        skyGradient.addColorStop(0.8, '#B0D4E6') // azul mais suave
        skyGradient.addColorStop(1, '#C8E0F0') // azul claro na parte inferior
      } else if (weatherData.condition === 'Clouds') {
        skyGradient.addColorStop(0, '#B0C4DE') // cinza azulado no topo
        skyGradient.addColorStop(0.5, '#B8C8E0') // cinza azulado no meio
        skyGradient.addColorStop(0.8, '#C0D0E0') // cinza azulado claro
        skyGradient.addColorStop(1, '#C8D8E8') // cinza azulado mais claro na parte inferior
      } else {
        skyGradient.addColorStop(0, '#708090') // cinza chumbo no topo
        skyGradient.addColorStop(0.5, '#788898') // cinza no meio
        skyGradient.addColorStop(0.8, '#8898A8') // cinza claro
        skyGradient.addColorStop(1, '#98A8B8') // cinza mais claro na parte inferior
      }
    } else if (isAfternoon) {
      // Tarde (15:30 - 18:00) - transição gradual de azul para laranja
      const afternoonProgress = (hour - 15.5) / 2.5 // 0 a 1 (15:30 a 18:00)
      
      // Função para interpolar cores
      const lerpColor = (color1, color2, t) => {
        const hex1 = color1.replace('#', '')
        const hex2 = color2.replace('#', '')
        const r1 = parseInt(hex1.substr(0, 2), 16)
        const g1 = parseInt(hex1.substr(2, 2), 16)
        const b1 = parseInt(hex1.substr(4, 2), 16)
        const r2 = parseInt(hex2.substr(0, 2), 16)
        const g2 = parseInt(hex2.substr(2, 2), 16)
        const b2 = parseInt(hex2.substr(4, 2), 16)
        const r = Math.round(r1 + (r2 - r1) * t)
        const g = Math.round(g1 + (g2 - g1) * t)
        const b = Math.round(b1 + (b2 - b1) * t)
        return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`
      }
      
      if (weatherData.condition === 'Clear') {
        skyGradient.addColorStop(0, lerpColor('#87CEEB', '#FF8C42', afternoonProgress))
        skyGradient.addColorStop(0.5, lerpColor('#B0D4E6', '#FF7F50', afternoonProgress))
        skyGradient.addColorStop(0.8, lerpColor('#B0D4E6', '#FF6347', afternoonProgress))
        skyGradient.addColorStop(1, lerpColor('#C8E0F0', '#FF6B6B', afternoonProgress))
      } else if (weatherData.condition === 'Clouds') {
        skyGradient.addColorStop(0, lerpColor('#B0C4DE', '#FFA07A', afternoonProgress))
        skyGradient.addColorStop(0.5, lerpColor('#B8C8E0', '#FF8C69', afternoonProgress))
        skyGradient.addColorStop(0.8, lerpColor('#C0D0E0', '#A0522D', afternoonProgress))
        skyGradient.addColorStop(1, lerpColor('#C8D8E8', '#CD5C5C', afternoonProgress))
      } else {
        skyGradient.addColorStop(0, lerpColor('#708090', '#D2691E', afternoonProgress))
        skyGradient.addColorStop(0.5, lerpColor('#788898', '#CD853F', afternoonProgress))
        skyGradient.addColorStop(0.8, lerpColor('#8898A8', '#8B4513', afternoonProgress))
        skyGradient.addColorStop(1, lerpColor('#98A8B8', '#A0522D', afternoonProgress))
      }
    } else if (isDusk) {
      // Durante o entardecer - gradiente linear suave com predominância de laranja e vermelho
      if (weatherData.condition === 'Clear') {
        skyGradient.addColorStop(0, '#FF8C42') // laranja claro no topo
        skyGradient.addColorStop(0.2, '#FF7F50') // laranja coral
        skyGradient.addColorStop(0.4, '#FF6B6B') // salmão/vermelho claro
        skyGradient.addColorStop(0.6, '#FF6347') // tomate/vermelho laranja
        skyGradient.addColorStop(0.75, '#FF4500') // laranja vermelho
        skyGradient.addColorStop(0.85, '#DC143C') // vermelho carmesim
        skyGradient.addColorStop(0.95, '#8B0000') // vermelho escuro
        skyGradient.addColorStop(1, '#6B0000') // vermelho muito escuro na parte inferior
      } else if (weatherData.condition === 'Clouds') {
        skyGradient.addColorStop(0, '#FFA07A') // salmão claro no topo
        skyGradient.addColorStop(0.3, '#FF8C69') // salmão médio
        skyGradient.addColorStop(0.5, '#CD5C5C') // vermelho indiano
        skyGradient.addColorStop(0.7, '#A0522D') // sienna
        skyGradient.addColorStop(0.85, '#8B4513') // sienna escuro
        skyGradient.addColorStop(1, '#654321') // marrom escuro na parte inferior
      } else {
        skyGradient.addColorStop(0, '#D2691E') // chocolate no topo
        skyGradient.addColorStop(0.3, '#CD853F') // peru
        skyGradient.addColorStop(0.5, '#A0522D') // sienna
        skyGradient.addColorStop(0.7, '#8B4513') // sienna escuro
        skyGradient.addColorStop(0.85, '#654321') // marrom escuro
        skyGradient.addColorStop(1, '#4B2C1A') // marrom muito escuro na parte inferior
      }
    }
    
    ctx.fillStyle = skyGradient
    // Preencher todo o canvas com o gradiente
    ctx.fillRect(0, 0, width, height)
  } else {
    // Para noite/amanhecer/entardecer, usar o sistema anterior
    ctx.fillStyle = skyColors.base
    ctx.fillRect(0, 0, width, height)
    
    // Adicionar gradiente radial para simular atmosfera
    const gradient = ctx.createRadialGradient(width/2, height/2, 0, width/2, height/2, Math.max(width, height))
    skyColors.gradient.forEach(({ stop, color }) => {
      gradient.addColorStop(stop, color)
    })
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, width, height)
  }
  
  // Ajustar overlay baseado no período do dia
  const overlay = document.querySelector('.star-map-overlay')
  if (overlay) {
    if (isDay) {
      overlay.classList.remove('night-mode')
    } else {
      overlay.classList.add('night-mode')
    }
  }
  
  // Desenhar sol (APENAS se for dia E céu limpo)
  if (hour >= 7 && hour < 18 && weatherData.condition === 'Clear') {
    drawSun(ctx, width, height, hour)
  }
  
  // Desenhar chuva (se for dia e estiver chovendo)
  if (hour >= 7 && hour < 20 && weatherData.condition === 'Rain') {
    drawRain(ctx, width, height)
  }
  
  // Iniciar animação de nuvens e chuva (se for dia, tarde ou entardecer)
  if (hour >= 7 && hour < 20) {
    // Parar animação anterior se existir
    if (cloudAnimationId) {
      cancelAnimationFrame(cloudAnimationId)
    }
    
    // Resetar tempo de início da animação para novo fade in
    cloudAnimationStartTime = Date.now()
    
    currentCloudContext = ctx
    currentCloudConfig = { 
      width, 
      height, 
      condition: weatherData.condition || 'Clear',
      isDay: true,
      weatherCondition: weatherData.condition || 'Clear'
    }
    
    // Desenhar nuvens inicialmente (sempre, mesmo se chover)
    drawClouds(ctx, width, height, weatherData.condition || 'Clear', false)
    
    // Se estiver chovendo, desenhar chuva também
    if (weatherData.condition === 'Rain') {
      drawRain(ctx, width, height)
    }
    
    // Iniciar animação contínua de nuvens e chuva
    function animateClouds() {
      if (currentCloudContext && currentCloudConfig) {
        // Atualizar configuração com horário atual para garantir sincronização
        const [hours, minutes] = starMapConfig.time.split(':').map(Number)
        const hour = hours + minutes / 60
        currentCloudConfig.hour = hour
        currentCloudConfig.isDay = hour >= 7 && hour < 18
        currentCloudConfig.isDusk = hour >= 18 && hour < 20
        
        // Redesenhar nuvens (elas se movem automaticamente)
        drawClouds(
          currentCloudContext, 
          currentCloudConfig.width, 
          currentCloudConfig.height, 
          currentCloudConfig.weatherCondition, 
          true
        )
        
        // Redesenhar chuva se necessário
        if (currentCloudConfig.weatherCondition === 'Rain') {
          drawRain(currentCloudContext, currentCloudConfig.width, currentCloudConfig.height)
        }
        
        cloudAnimationId = requestAnimationFrame(animateClouds)
      }
    }
    
    // Iniciar loop de animação
    cloudAnimationId = requestAnimationFrame(animateClouds)
  } else {
    // Parar animação se não for horário de nuvens
    if (cloudAnimationId) {
      cancelAnimationFrame(cloudAnimationId)
      cloudAnimationId = null
    }
    currentCloudContext = null
    currentCloudConfig = null
  }
  
  // Converter coordenadas celestes para coordenadas de tela
  function raDecToXY(ra, dec, lat, lon, date) {
    const latRad = lat * Math.PI / 180
    const decRad = dec * Math.PI / 180
    
    // Parsear data e hora corretamente (assumindo hora local)
    const [year, month, day] = starMapConfig.date.split('-').map(Number)
    const [hours, minutes] = starMapConfig.time.split(':').map(Number)
    const localTime = hours + minutes / 60
    
    // Calcular dia juliano (JD) para a data e hora especificadas
    // Fórmula de cálculo do dia juliano
    const a = Math.floor((14 - month) / 12)
    const y = year + 4800 - a
    const m = month + 12 * a - 3
    
    // Dia juliano para meia-noite do dia
    let jd = day + Math.floor((153 * m + 2) / 5) + 365 * y + Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400) - 32045
    
    // Adicionar fração do dia (hora)
    jd += (localTime / 24) - 0.5
    
    // Calcular dias desde J2000.0 (1 de janeiro de 2000, 12:00 UTC)
    // J2000.0 = 2451545.0
    const j2000 = 2451545.0
    const daysSinceJ2000 = jd - j2000
    
    // Calcular hora sideral em Greenwich (GST) para a data
    // Fórmula precisa: GST = 18.697374558 + 24.06570982441908 * D
    // onde D é o número de dias desde J2000.0
    // Ajustar para o intervalo 0-24 horas
    let gst = (18.697374558 + 24.06570982441908 * daysSinceJ2000) % 24
    if (gst < 0) gst += 24
    
    // Adicionar a hora do dia (correção para hora sideral média)
    gst = (gst + localTime * 1.00273790935) % 24
    if (gst < 0) gst += 24
    
    // Converter para hora sideral local (LST = GST + longitude/15)
    // longitude/15 converte graus para horas (360° = 24h)
    let lst = (gst + lon/15) % 24
    if (lst < 0) lst += 24
    
    // Calcular ângulo horário (HA = LST - RA)
    // RA está em horas, então dividimos por 15 para converter graus para horas
    let hourAngle = (lst - ra/15) * Math.PI / 12
    
    // Normalizar ângulo horário para o intervalo [-π, π]
    while (hourAngle > Math.PI) hourAngle -= 2 * Math.PI
    while (hourAngle < -Math.PI) hourAngle += 2 * Math.PI
    
    // Calcular altitude e azimuth
    const sinAlt = Math.sin(latRad) * Math.sin(decRad) + 
                   Math.cos(latRad) * Math.cos(decRad) * Math.cos(hourAngle)
    const alt = Math.asin(Math.max(-1, Math.min(1, sinAlt)))
    
    if (alt <= 0) {
      return { x: 0, y: 0, visible: false }
    }
    
    const cosAz = (Math.sin(decRad) - Math.sin(latRad) * Math.sin(alt)) / 
                  (Math.cos(latRad) * Math.cos(alt))
    let az = Math.acos(Math.max(-1, Math.min(1, cosAz)))
    
    // Ajustar azimuth baseado no ângulo horário
    if (Math.sin(hourAngle) > 0) {
      az = 2 * Math.PI - az
    }
    
    // Projeção estereográfica para coordenadas de tela
    // Centralizar o zênite e projetar em coordenadas polares
    const r = (Math.PI/2 - alt) / (Math.PI/2) * Math.min(width, height) / 2
    const x = width/2 + r * Math.sin(az)
    const yPos = height/2 - r * Math.cos(az)
    
    return { x, y: yPos, visible: alt > 0 && x >= 0 && x <= width && yPos >= 0 && yPos <= height }
  }
  
  // Desenhar estrelas
  const visibleStars = []
  brightStars.forEach(star => {
    const pos = raDecToXY(star.ra, star.dec, starMapConfig.latitude, starMapConfig.longitude, starMapConfig.date)
    if (pos.visible && pos.x >= 0 && pos.x <= width && pos.y >= 0 && pos.y <= height) {
      visibleStars.push({ ...star, ...pos })
    }
  })
  
  // Ordenar por magnitude (mais brilhantes primeiro)
  visibleStars.sort((a, b) => a.mag - b.mag)
  
  // Identificar constelação mais visível (considerando estação do ano)
  const mostVisibleConstellation = getMostVisibleConstellation(visibleStars, starMapConfig.date)
  
  // Calcular centro das estrelas visíveis para centralizar
  let centerX = width / 2
  let centerY = height / 2
  if (visibleStars.length > 0) {
    const sumX = visibleStars.reduce((sum, star) => sum + star.x, 0)
    const sumY = visibleStars.reduce((sum, star) => sum + star.y, 0)
    const avgX = sumX / visibleStars.length
    const avgY = sumY / visibleStars.length
    // Calcular offset para centralizar
    const offsetX = width / 2 - avgX
    const offsetY = height / 2 - avgY
    // Aplicar offset às estrelas
    visibleStars.forEach(star => {
      star.x += offsetX
      star.y += offsetY
    })
    centerX = width / 2
    centerY = height / 2
  }
  
  // Ajustar parâmetros baseado no modo destacado
  const starSizeMultiplier = highlighted ? 2.5 : 1
  const starBrightnessMultiplier = highlighted ? 1.4 : 0.7  // Reduzido de 1.8/1 para 1.4/0.7
  const glowSizeMultiplier = highlighted ? 5 : 3
  const animationDelay = highlighted ? 30 : 50
  
  // Desenhar estrelas com animação (só se estrelas estiverem visíveis)
  // Garantir que as estrelas sejam sempre desenhadas quando highlighted ou quando for noite
  const shouldDrawStars = skyColors.starsVisible || highlighted || (!isDay && !isDusk)
  if (shouldDrawStars) {
    visibleStars.forEach((star, index) => {
      setTimeout(() => {
      const baseSize = Math.max(1, 3 - (star.mag / 2))
      const size = baseSize * starSizeMultiplier
      const baseBrightness = Math.max(0.3, 1 - (star.mag + 1) / 5)
      const brightness = Math.min(0.8, baseBrightness * starBrightnessMultiplier)  // Limitado a 0.8 máximo
      
      // Efeito de brilho expandido (desenhar primeiro para ficar atrás)
      const glowGradient = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, size * glowSizeMultiplier)
      if (highlighted) {
        // Brilho reduzido no modo destacado (apenas branco)
        glowGradient.addColorStop(0, `rgba(255, 255, 255, ${brightness * 0.5})`)  // Reduzido de 0.8
        glowGradient.addColorStop(0.5, `rgba(255, 255, 255, ${brightness * 0.2})`)  // Reduzido de 0.3
        glowGradient.addColorStop(1, 'rgba(255, 255, 255, 0)')
      } else {
        glowGradient.addColorStop(0, `rgba(255, 255, 255, ${brightness * 0.3})`)  // Reduzido de 0.5
        glowGradient.addColorStop(1, 'rgba(255, 255, 255, 0)')
      }
      ctx.fillStyle = glowGradient
      ctx.beginPath()
      ctx.arc(star.x, star.y, size * glowSizeMultiplier, 0, Math.PI * 2)
      ctx.fill()
      
      // Brilho da estrela principal (reduzido)
      ctx.fillStyle = `rgba(255, 255, 255, ${brightness * 0.8})`  // Reduzido de brightness
      ctx.beginPath()
      ctx.arc(star.x, star.y, size, 0, Math.PI * 2)
      ctx.fill()
      
      // Adicionar ponto central mais brilhante (reduzido)
      if (highlighted) {
        ctx.fillStyle = `rgba(255, 255, 255, ${Math.min(0.9, brightness * 1.2)})`  // Reduzido de 1.5
        ctx.beginPath()
        ctx.arc(star.x, star.y, size * 0.5, 0, Math.PI * 2)
        ctx.fill()
      }
      }, index * animationDelay)
    })
  }
  
  // Adicionar estrelas menores aleatórias para preencher (só se estrelas estiverem visíveis)
  const starCount = (highlighted && shouldDrawStars) ? 300 : (shouldDrawStars ? 200 : 0)
  const baseDelay = visibleStars.length * animationDelay
  for (let i = 0; i < starCount; i++) {
    setTimeout(() => {
      const x = Math.random() * width
      const y = Math.random() * height
      const baseBrightness = Math.random() * 0.4  // Reduzido de 0.5
      const brightness = highlighted ? baseBrightness * 1.2 : baseBrightness * 0.8  // Reduzido
      const baseSize = Math.random() * 1.5
      const size = highlighted ? baseSize * 1.3 : baseSize
      
      ctx.fillStyle = `rgba(255, 255, 255, ${Math.min(0.6, brightness)})`  // Limitado a 0.6
      ctx.beginPath()
      ctx.arc(x, y, size, 0, Math.PI * 2)
      ctx.fill()
      
      // Adicionar brilho sutil nas estrelas menores quando destacado (reduzido)
      if (highlighted && brightness > 0.2) {
        const smallGlow = ctx.createRadialGradient(x, y, 0, x, y, size * 2)
        smallGlow.addColorStop(0, `rgba(255, 255, 255, ${brightness * 0.2})`)  // Reduzido de 0.3
        smallGlow.addColorStop(1, 'rgba(255, 255, 255, 0)')
        ctx.fillStyle = smallGlow
        ctx.beginPath()
        ctx.arc(x, y, size * 2, 0, Math.PI * 2)
        ctx.fill()
      }
    }, baseDelay + i * 8)
  }
  
  // Buscar dados do clima e mostrar informações completas (só quando destacado)
  if (info && highlighted) {
    info.classList.remove('hidden')
    getWeatherData(starMapConfig.latitude, starMapConfig.longitude, starMapConfig.date).then(weather => {
      setTimeout(() => {
        let infoHTML = `
          <div style="background: rgba(0, 0, 0, 0.4); backdrop-filter: blur(12px); border-radius: 1rem; padding: 2.5rem; border: 1px solid rgba(255, 255, 255, 0.1); box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5); line-height: 1.8;">
            <p style="color: white; font-size: 1.125rem; font-weight: 600; margin-bottom: 1.5rem; text-shadow: 2px 2px 10px rgba(0,0,0,0.5);">
              ${starMapConfig.city}
            </p>
            <p style="color: rgba(255, 255, 255, 0.9); font-size: 0.875rem; margin-bottom: 1.5rem;">
              ${formatDate(starMapConfig.date)} • ${starMapConfig.time}
            </p>
            <p style="color: rgba(255, 255, 255, 0.9); font-size: 0.875rem; margin-bottom: 1.5rem; font-weight: 500;">
              🌡️ ${weather.temperature}°C • ${weather.description}
            </p>
        `
        
        if (mostVisibleConstellation) {
          infoHTML += `
            <div style="border-top: 1px solid rgba(255, 255, 255, 0.2); padding-top: 1.5rem;">
              <p style="color: #ffd700; font-size: 1rem; font-weight: 700; margin-bottom: 1.25rem; text-shadow: 0 0 10px rgba(255,215,0,0.3);">
                ⭐ ${mostVisibleConstellation.name}
              </p>
              <p style="color: rgba(255, 255, 255, 0.8); font-size: 0.875rem; line-height: 1.75; font-style: italic;">
                ${mostVisibleConstellation.constellation.meaning}
              </p>
            </div>
          `
        }
        
        infoHTML += `</div>`
        
        // Atualizar desktop
        if (info) {
          info.innerHTML = infoHTML
          info.style.opacity = '0'
          info.style.transition = 'opacity 1s ease-in'
          setTimeout(() => {
            info.style.opacity = '1'
          }, 100)
        }
        
        // Atualizar também o painel mobile e mostrar seta
        const infoMobileContent = document.getElementById('starMapInfoMobileContent')
        const infoMobile = document.getElementById('starMapInfoMobile')
        const infoMobileToggle = document.getElementById('starMapInfoToggle')
        
        if (infoMobileContent && infoMobile) {
          // Ajustar HTML para mobile (fontes menores, padding reduzido)
          const mobileInfoHTML = infoHTML
            .replace(/font-size:\s*1\.125rem/g, 'font-size: 1rem')
            .replace(/font-size:\s*0\.875rem/g, 'font-size: 0.8125rem')
            .replace(/padding:\s*2\.5rem/g, 'padding: 2rem')
            .replace(/margin-bottom:\s*1\.5rem/g, 'margin-bottom: 1.25rem')
            .replace(/margin-bottom:\s*1\.25rem/g, 'margin-bottom: 1rem')
          
          infoMobileContent.innerHTML = mobileInfoHTML
          
          // Mostrar seta quando há informações (só no mobile)
          if (infoMobileToggle && window.innerWidth < 768) {
            const toggleIcon = document.getElementById('starMapInfoToggleIcon')
            infoMobileToggle.style.display = 'block'
            // Garantir que o ícone inicial seja a seta
            if (toggleIcon) {
              toggleIcon.textContent = '←'
              toggleIcon.classList.add('animate-pulse')
            }
          }
          
          // Inicializar botão fechar (fora do modal)
          const closeBtn = document.getElementById('starMapInfoCloseBtn')
          if (closeBtn) {
            // Remover listeners anteriores para evitar duplicação
            const newCloseBtn = closeBtn.cloneNode(true)
            closeBtn.parentNode.replaceChild(newCloseBtn, closeBtn)
            newCloseBtn.addEventListener('click', closeInfoModal)
            // Mostrar botão X quando modal abrir
            newCloseBtn.style.opacity = '1'
            newCloseBtn.style.pointerEvents = 'auto'
          }
        }
      }, 1000)
    }).catch(() => {
      // Fallback se falhar ao buscar clima
      setTimeout(() => {
        let infoHTML = `
          <div style="background: rgba(0, 0, 0, 0.4); backdrop-filter: blur(12px); border-radius: 1rem; padding: 2.5rem; border: 1px solid rgba(255, 255, 255, 0.1); box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5); line-height: 1.8;">
            <p style="color: white; font-size: 1.125rem; font-weight: 600; margin-bottom: 1.5rem; text-shadow: 2px 2px 10px rgba(0,0,0,0.5);">
              ${starMapConfig.city}
            </p>
            <p style="color: rgba(255, 255, 255, 0.9); font-size: 0.875rem; margin-bottom: 1.5rem;">
              ${formatDate(starMapConfig.date)} • ${starMapConfig.time}
            </p>
        `
        
        if (mostVisibleConstellation) {
          infoHTML += `
            <div style="border-top: 1px solid rgba(255, 255, 255, 0.2); padding-top: 1.5rem;">
              <p style="color: #ffd700; font-size: 1rem; font-weight: 700; margin-bottom: 1.25rem; text-shadow: 0 0 10px rgba(255,215,0,0.3);">
                ⭐ ${mostVisibleConstellation.name}
              </p>
              <p style="color: rgba(255, 255, 255, 0.8); font-size: 0.875rem; line-height: 1.75; font-style: italic;">
                ${mostVisibleConstellation.constellation.meaning}
              </p>
            </div>
          `
        }
        
        infoHTML += `</div>`
        
        // Atualizar desktop
        if (info) {
          info.innerHTML = infoHTML
          info.style.opacity = '0'
          info.style.transition = 'opacity 1s ease-in'
          setTimeout(() => {
            info.style.opacity = '1'
          }, 100)
        }
        
        // Atualizar também o painel mobile e mostrar seta
        const infoMobileContent = document.getElementById('starMapInfoMobileContent')
        const infoMobile = document.getElementById('starMapInfoMobile')
        const infoMobileToggle = document.getElementById('starMapInfoToggle')
        
        if (infoMobileContent && infoMobile) {
          // Ajustar HTML para mobile (fontes menores, padding reduzido)
          const mobileInfoHTML = infoHTML
            .replace(/font-size:\s*1\.125rem/g, 'font-size: 1rem')
            .replace(/font-size:\s*0\.875rem/g, 'font-size: 0.8125rem')
            .replace(/padding:\s*2\.5rem/g, 'padding: 2rem')
            .replace(/margin-bottom:\s*1\.5rem/g, 'margin-bottom: 1.25rem')
            .replace(/margin-bottom:\s*1\.25rem/g, 'margin-bottom: 1rem')
          
          infoMobileContent.innerHTML = mobileInfoHTML
          
          // Mostrar seta quando há informações (só no mobile)
          if (infoMobileToggle && window.innerWidth < 768) {
            const toggleIcon = document.getElementById('starMapInfoToggleIcon')
            infoMobileToggle.style.display = 'block'
            // Garantir que o ícone inicial seja a seta
            if (toggleIcon) {
              toggleIcon.textContent = '←'
              toggleIcon.classList.add('animate-pulse')
            }
          }
          
          // Inicializar botão fechar (fora do modal)
          const closeBtn = document.getElementById('starMapInfoCloseBtn')
          if (closeBtn) {
            // Remover listeners anteriores para evitar duplicação
            const newCloseBtn = closeBtn.cloneNode(true)
            closeBtn.parentNode.replaceChild(newCloseBtn, closeBtn)
            newCloseBtn.addEventListener('click', closeInfoModal)
            // Mostrar botão X quando modal abrir
            newCloseBtn.style.opacity = '1'
            newCloseBtn.style.pointerEvents = 'auto'
          }
        }
      }, 1000)
    })
  } else if (info && !highlighted) {
    // Esconder informações quando não está destacado
    if (info) {
      info.innerHTML = ''
      info.style.opacity = '0'
      info.classList.add('hidden')
    }
    
    // Limpar também o mobile e fechar painel
    const infoMobileContent = document.getElementById('starMapInfoMobileContent')
    const infoMobile = document.getElementById('starMapInfoMobile')
    const infoMobileToggle = document.getElementById('starMapInfoToggle')
    
    if (infoMobileContent) {
      infoMobileContent.innerHTML = ''
    }
    if (infoMobile) {
      infoMobile.style.transition = 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
      infoMobile.classList.remove('translate-x-0')
      infoMobile.classList.add('translate-x-full')
    }
    // Esconder seta quando não há informações
    if (infoMobileToggle) {
      infoMobileToggle.style.display = 'none'
    }
  }
}

// Estado do player de música
let isPlaying = false
let currentProgress = 0
let totalDuration = 219 // 3:39 em segundos
let progressInterval = null
let playerInitialized = false

// Importar arquivos locais
import capaImg from './capa-lisboa.jpeg'
import audioFile from './lisboa-ana-vitoria.mp3'

// Configuração da música (usando arquivos locais)
const musicConfig = {
  coverUrl: capaImg, // Arquivo local da capa
  audioUrl: audioFile, // Arquivo local da música
  spotifyTrackId: '4i5bRtbFj9mvnlC2Dg5Ofd', // ID do Spotify (opcional, para compartilhar)
  songTitle: 'Lisboa',
  artistName: 'ANAVITÓRIA',
  artistNameFull: 'ANAVITÓRIA, Lenine',
  duration: 219 // 3:39 em segundos
}

function animateMusicPlayer() {
  const introText = document.getElementById('musicIntroText')
  const playerContainer = document.getElementById('musicPlayerContainer')
  const audioPlayer = document.getElementById('musicAudioPlayer')
  
  // Resetar estados iniciais
  if (introText) {
    introText.style.opacity = '0'
    introText.style.transition = 'none'
  }
  
  if (playerContainer) {
    playerContainer.style.opacity = '0'
    playerContainer.style.transform = 'translateY(32px)'
    playerContainer.style.transition = 'none'
  }

  // Forçar reflow
  void introText?.offsetWidth
  void playerContainer?.offsetWidth

  // Carregar capa, controles e informações da música o mais cedo possível
  loadAlbumCover()

  if (!playerInitialized) {
    setupMusicPlayerControls()
    playerInitialized = true
  }

  updateMusicInfo()

  // Tentar iniciar a música logo após entrar no slide, enquanto ainda há ativação do usuário
  setTimeout(() => {
    // Só tenta autoplay se ainda não estiver tocando
    if (!isPlaying && audioPlayer) {
      startMusicWithFadeIn()
    }
  }, 400)

  // Mostrar texto inicial
  if (introText) {
    setTimeout(() => {
      introText.style.opacity = '1'
      introText.style.transition = 'opacity 1s ease-in'
    }, 100)
  }
  
  // Após 3 segundos, fazer fade out do texto e fade in do player
  setTimeout(() => {
    if (introText) {
      introText.style.opacity = '0'
      introText.style.transition = 'opacity 1s ease-out'
    }
    
    // Após fade out do texto, mostrar player com fade in + slide up
    setTimeout(() => {
      if (playerContainer) {
        playerContainer.style.opacity = '1'
        playerContainer.style.transform = 'translateY(0)'
        playerContainer.style.transition = 'opacity 1.5s ease-in, transform 1.5s ease-out'
      }

      // Garantir que o botão de pause funcione - anexar listener novamente quando o player estiver visível
      setTimeout(() => {
        const playPauseBtn = document.getElementById('playPauseBtn')
        if (playPauseBtn) {
          // Remover listeners antigos
          const newBtn = playPauseBtn.cloneNode(true)
          playPauseBtn.parentNode.replaceChild(newBtn, playPauseBtn)
          
          // Adicionar novo listener
          newBtn.addEventListener('click', (e) => {
            e.preventDefault()
            e.stopPropagation()
            togglePlayPause()
          }, true)
        }
      }, 100)

      // Atualizar barra de progresso caso já esteja tocando
      updateProgressBar()
    }, 1000) // Esperar 1 segundo para o fade out do texto
  }, 3000) // Texto visível por 3 segundos
}

function loadAlbumCover() {
  const albumCoverImg = document.getElementById('albumCoverImg')
  const musicSlideBg = document.getElementById('musicSlideBg')
  
  if (albumCoverImg) {
    if (musicConfig.coverUrl) {
      // Carregar imagem local
      albumCoverImg.src = musicConfig.coverUrl
      albumCoverImg.style.display = 'block'
      
      albumCoverImg.onload = () => {
        // Criar gradiente baseado na capa
        createGradientFromImage(albumCoverImg, musicSlideBg)
      }
      
      albumCoverImg.onerror = () => {
        console.warn('Erro ao carregar capa do álbum local.')
        // Fallback: usar gradiente padrão
        if (musicSlideBg) {
          musicSlideBg.style.background = 'linear-gradient(to bottom, rgba(29, 185, 84, 0.2), rgba(0, 0, 0, 0.8))'
        }
      }
    } else {
      // Se não houver URL, usar gradiente padrão
      if (albumCoverImg) {
        albumCoverImg.style.display = 'none'
      }
      if (musicSlideBg) {
        musicSlideBg.style.background = 'linear-gradient(to bottom, rgba(29, 185, 84, 0.2), rgba(0, 0, 0, 0.8))'
      }
    }
  }
}

// Função simplificada para definir apenas a capa
function setMusicCover(coverUrl) {
  if (coverUrl) {
    musicConfig.coverUrl = coverUrl
    // Recarregar se já estiver no slide
    if (currentSlide === 4) {
      loadAlbumCover()
    }
    console.log('Capa definida. Recarregue o slide para ver a mudança.')
  } else {
    console.error('Por favor, forneça uma URL válida para a capa.')
  }
}

function createGradientFromImage(img, container) {
  // Criar um canvas temporário para extrair cores da imagem
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')
  canvas.width = img.naturalWidth || 100
  canvas.height = img.naturalHeight || 100
  
  try {
    ctx.drawImage(img, 0, 0)
    
    // Extrair cores dos cantos da imagem
    const topLeft = ctx.getImageData(0, 0, 10, 10).data
    const bottomRight = ctx.getImageData(canvas.width - 10, canvas.height - 10, 10, 10).data
    
    // Calcular cores médias
    const getAverageColor = (data) => {
      let r = 0, g = 0, b = 0
      for (let i = 0; i < data.length; i += 4) {
        r += data[i]
        g += data[i + 1]
        b += data[i + 2]
      }
      const count = data.length / 4
      return {
        r: Math.floor(r / count),
        g: Math.floor(g / count),
        b: Math.floor(b / count)
      }
    }
    
    const color1 = getAverageColor(topLeft)
    const color2 = getAverageColor(bottomRight)
    
    // Criar gradiente escurecido para o fundo
    const darken = (color, factor = 0.3) => ({
      r: Math.floor(color.r * factor),
      g: Math.floor(color.g * factor),
      b: Math.floor(color.b * factor)
    })
    
    const darkColor1 = darken(color1, 0.2)
    const darkColor2 = darken(color2, 0.4)
    
    if (container) {
      container.style.background = `linear-gradient(to bottom, 
        rgb(${darkColor1.r}, ${darkColor1.g}, ${darkColor1.b}), 
        rgb(${darkColor2.r}, ${darkColor2.g}, ${darkColor2.b}))`
    }
  } catch (e) {
    // Fallback para gradiente padrão
    if (container) {
      container.style.background = 'linear-gradient(to bottom, rgba(29, 185, 84, 0.2), rgba(0, 0, 0, 0.8))'
    }
  }
}

function updateMusicInfo() {
  const songTitle = document.getElementById('songTitle')
  const artistName = document.getElementById('artistName')
  const audioPlayer = document.getElementById('musicAudioPlayer')
  
  if (songTitle) {
    songTitle.textContent = musicConfig.songTitle
  }
  
  if (artistName) {
    artistName.textContent = musicConfig.artistName
  }
  
  // Configurar áudio player
  if (audioPlayer && musicConfig.audioUrl) {
    const source = document.getElementById('audioSource')
    if (source && source.src !== musicConfig.audioUrl) {
      source.src = musicConfig.audioUrl
      audioPlayer.load()
    }
    
    // Atualizar duração quando o áudio carregar
    const updateDuration = () => {
      if (audioPlayer.duration && !isNaN(audioPlayer.duration)) {
        totalDuration = Math.floor(audioPlayer.duration)
        const totalTimeEl = document.getElementById('totalTime')
        if (totalTimeEl) {
          totalTimeEl.textContent = formatTime(totalDuration)
        }
      }
    }
    
    audioPlayer.addEventListener('loadedmetadata', updateDuration, { once: true })
    
    // Se já estiver carregado, atualizar imediatamente
    if (audioPlayer.readyState >= 1) {
      updateDuration()
    }
  } else {
    // Fallback para duração configurada
    totalDuration = musicConfig.duration
    const totalTimeEl = document.getElementById('totalTime')
    if (totalTimeEl) {
      totalTimeEl.textContent = formatTime(totalDuration)
    }
  }
}

// Função para definir a música e capa (pode ser chamada pelo usuário)
function setMusic(coverUrl, spotifyTrackId, songTitle, artistName, artistNameFull, duration) {
  if (coverUrl) musicConfig.coverUrl = coverUrl
  if (spotifyTrackId) musicConfig.spotifyTrackId = spotifyTrackId
  if (songTitle) musicConfig.songTitle = songTitle
  if (artistName) musicConfig.artistName = artistName
  if (artistNameFull) musicConfig.artistNameFull = artistNameFull
  if (duration) musicConfig.duration = duration
  
  // Recarregar se já estiver no slide
  if (currentSlide === 4) {
    loadAlbumCover()
    updateMusicInfo()
  }
}

function setupMusicPlayerControls() {
  const playPauseBtn = document.getElementById('playPauseBtn')
  const prevBtn = document.getElementById('prevBtn')
  const nextBtn = document.getElementById('nextBtn')
  const shuffleBtn = document.getElementById('shuffleBtn')
  const repeatBtn = document.getElementById('repeatBtn')
  const volumeBtn = document.getElementById('volumeBtn')
  const shareBtn = document.getElementById('shareBtn')
  const addToPlaylistBtn = document.getElementById('addToPlaylistBtn')
  const progressBarWrapper = document.querySelector('.progress-bar-wrapper')
  
  // Play/Pause - usar event delegation para garantir que funcione
  const playerContainer = document.getElementById('musicPlayerContainer')
  if (playerContainer) {
    playerContainer.addEventListener('click', (e) => {
      const target = e.target.closest('#playPauseBtn')
      if (target) {
        e.preventDefault()
        e.stopPropagation()
        togglePlayPause()
      }
    })
  }
  
  // Também adicionar listener direto no botão como fallback
  if (playPauseBtn) {
    playPauseBtn.addEventListener('click', (e) => {
      e.preventDefault()
      e.stopPropagation()
      togglePlayPause()
    }, { capture: true })
  }
  
  // Anterior (não funcional, apenas visual)
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      prevBtn.style.transform = 'scale(0.9)'
    setTimeout(() => {
        prevBtn.style.transform = 'scale(1)'
      }, 150)
    })
  }
  
  // Próximo (não funcional, apenas visual)
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      nextBtn.style.transform = 'scale(0.9)'
      setTimeout(() => {
        nextBtn.style.transform = 'scale(1)'
      }, 150)
    })
  }
  
  // Shuffle
  if (shuffleBtn) {
    shuffleBtn.addEventListener('click', () => {
      shuffleBtn.classList.toggle('active')
    })
  }
  
  // Repeat
  if (repeatBtn) {
    repeatBtn.addEventListener('click', () => {
      repeatBtn.classList.toggle('active')
    })
  }
  
  // Controle de Volume - barra deslizável
  const volumeBarWrapper = document.getElementById('volumeBarWrapper')
  const volumeBarFill = document.getElementById('volumeBarFill')
  const volumeBarHandle = document.getElementById('volumeBarHandle')
  const audioPlayer = document.getElementById('musicAudioPlayer')
  
  let isDraggingVolume = false
  let userControlledVolume = false // Flag para indicar se o usuário controlou o volume manualmente
  
  function updateVolumeBar(volume) {
    const percentage = volume * 100
    if (volumeBarFill) volumeBarFill.style.width = percentage + '%'
    if (volumeBarHandle) volumeBarHandle.style.left = percentage + '%'
  }
  
  function setVolume(volume) {
    if (audioPlayer) {
      userControlledVolume = true // Marcar que o usuário está controlando o volume
      window.userControlledVolume = true // Tornar acessível globalmente
      audioPlayer.volume = Math.max(0, Math.min(1, volume))
      updateVolumeBar(audioPlayer.volume)
    }
  }
  
  if (volumeBarWrapper && audioPlayer) {
    // Inicializar barra de volume visualmente em 25%
    // O volume real do áudio será controlado pelo fade-in
    updateVolumeBar(0.25)
    
    // Clique na barra
    volumeBarWrapper.addEventListener('click', (e) => {
      const rect = volumeBarWrapper.getBoundingClientRect()
      const clickX = e.clientX - rect.left
      const percentage = Math.max(0, Math.min(100, (clickX / rect.width) * 100))
      setVolume(percentage / 100)
    })
    
    // Arrastar o handle
    volumeBarHandle.addEventListener('mousedown', (e) => {
      isDraggingVolume = true
      e.preventDefault()
    })
    
    volumeBarHandle.addEventListener('touchstart', (e) => {
      isDraggingVolume = true
      e.preventDefault()
    })
    
    document.addEventListener('mousemove', (e) => {
      if (isDraggingVolume && volumeBarWrapper) {
        const rect = volumeBarWrapper.getBoundingClientRect()
        const x = e.clientX - rect.left
        const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))
        setVolume(percentage / 100)
      }
    })
    
    document.addEventListener('touchmove', (e) => {
      if (isDraggingVolume && volumeBarWrapper) {
        const rect = volumeBarWrapper.getBoundingClientRect()
        const touch = e.touches[0]
        const x = touch.clientX - rect.left
        const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))
        setVolume(percentage / 100)
      }
    })
    
    document.addEventListener('mouseup', () => {
      isDraggingVolume = false
    })
    
    document.addEventListener('touchend', () => {
      isDraggingVolume = false
    })
  }
  
  // Compartilhar - abrir Spotify
  if (shareBtn) {
    shareBtn.addEventListener('click', () => {
      window.open('https://open.spotify.com/playlist/37i9dQZF1EJLL3t8wr9SrQ?si=d50ba8d0446c4ee7', '_blank')
    })
  }
  
  // Adicionar à playlist - abrir Spotify
  if (addToPlaylistBtn) {
    addToPlaylistBtn.addEventListener('click', () => {
      window.open('https://open.spotify.com/playlist/37i9dQZF1EJLL3t8wr9SrQ?si=d50ba8d0446c4ee7', '_blank')
    })
  }
  
  // Barra de progresso - clicar para pular
  if (progressBarWrapper) {
    progressBarWrapper.addEventListener('click', (e) => {
      const rect = progressBarWrapper.getBoundingClientRect()
      const clickX = e.clientX - rect.left
      const percentage = (clickX / rect.width) * 100
      seekTo(percentage)
    })
  }
  
  // Botões inferiores
  const libraryBtn = document.getElementById('libraryBtn')
  const likeBtn = document.getElementById('likeBtn')
  const queueBtn = document.getElementById('queueBtn')
  
  if (libraryBtn) {
    libraryBtn.addEventListener('click', () => {
      window.open('https://open.spotify.com/playlist/37i9dQZF1EJLL3t8wr9SrQ?si=d50ba8d0446c4ee7', '_blank')
    })
  }
  
  if (likeBtn) {
    likeBtn.addEventListener('click', () => {
      likeBtn.classList.toggle('active')
    })
  }
  
  if (queueBtn) {
    queueBtn.addEventListener('click', () => {
      // Ação para mostrar fila (pode ser implementada depois)
      queueBtn.style.transform = 'scale(0.9)'
      setTimeout(() => {
        queueBtn.style.transform = 'scale(1)'
      }, 150)
    })
  }
  
}

function startMusicWithFadeIn() {
  const audioPlayer = document.getElementById('musicAudioPlayer')
  const playPauseBtn = document.getElementById('playPauseBtn')
  const playIcon = playPauseBtn?.querySelector('.play-icon')
  const pauseIcon = playPauseBtn?.querySelector('.pause-icon')
  
  if (!audioPlayer) {
    console.error('Elemento de áudio não encontrado')
    return
  }
  
  // Configurar volume inicial como 0
  audioPlayer.volume = 0
  
  // Tocar música
  audioPlayer.play().then(() => {
    isPlaying = true
    if (playIcon) playIcon.classList.add('hidden')
    if (pauseIcon) pauseIcon.classList.remove('hidden')
    
    // Fade in do volume (0 a 0.25 em 2 segundos)
    const fadeDuration = 2000 // 2 segundos
    const fadeSteps = 50
    const finalVolume = 0.25 // Volume final em 25%
    const volumeStep = finalVolume / fadeSteps
    const timeStep = fadeDuration / fadeSteps
    
    let currentStep = 0
    const fadeInterval = setInterval(() => {
      // Verificar se o usuário controlou o volume manualmente
      const userControlled = window.userControlledVolume === true
      if (userControlled) {
        clearInterval(fadeInterval)
        return
      }
      
      currentStep++
      const currentVolume = Math.min(volumeStep * currentStep, finalVolume)
      audioPlayer.volume = currentVolume
      
      // Atualizar barra de volume durante o fade in
      const volumeBarFill = document.getElementById('volumeBarFill')
      const volumeBarHandle = document.getElementById('volumeBarHandle')
      if (volumeBarFill && volumeBarHandle) {
        const percentage = currentVolume * 100
        volumeBarFill.style.width = percentage + '%'
        volumeBarHandle.style.left = percentage + '%'
      }
      
      if (currentStep >= fadeSteps) {
        clearInterval(fadeInterval)
        if (!userControlled) {
          audioPlayer.volume = finalVolume // Volume final em 25%
          // Atualizar barra de volume para 25%
          const volumeBarFill = document.getElementById('volumeBarFill')
          const volumeBarHandle = document.getElementById('volumeBarHandle')
          if (volumeBarFill && volumeBarHandle) {
            volumeBarFill.style.width = '25%'
            volumeBarHandle.style.left = '25%'
          }
        }
      }
    }, timeStep)
    
    // Iniciar atualização de progresso
    startProgressUpdate()
  }).catch((error) => {
    console.error('Erro ao reproduzir áudio:', error)
  })
}

function togglePlayPause() {
  const playPauseBtn = document.getElementById('playPauseBtn')
  const playIcon = playPauseBtn?.querySelector('.play-icon')
  const pauseIcon = playPauseBtn?.querySelector('.pause-icon')
  const audioPlayer = document.getElementById('musicAudioPlayer')
  
  if (!audioPlayer) {
    console.error('Elemento de áudio não encontrado')
    return
  }
  
  if (audioPlayer.paused || audioPlayer.ended) {
    // Tocar música
    const playPromise = audioPlayer.play()
    
    if (playPromise !== undefined) {
      playPromise.then(() => {
        isPlaying = true
        if (playIcon) playIcon.classList.add('hidden')
        if (pauseIcon) pauseIcon.classList.remove('hidden')
        
        // Iniciar atualização de progresso
        startProgressUpdate()
      }).catch((error) => {
        console.error('Erro ao reproduzir áudio:', error)
      })
    }
  } else {
    // Pausar música
    audioPlayer.pause()
    isPlaying = false
    if (playIcon) playIcon.classList.remove('hidden')
    if (pauseIcon) pauseIcon.classList.add('hidden')
    
    // Parar atualização de progresso
    stopProgressUpdate()
  }
}

function startProgressUpdate() {
  const audioPlayer = document.getElementById('musicAudioPlayer')
  if (!audioPlayer) return
  
  if (progressInterval) {
    clearInterval(progressInterval)
  }
  
  // Atualizar progresso baseado no áudio real
  progressInterval = setInterval(() => {
    if (audioPlayer && !audioPlayer.paused) {
      currentProgress = Math.floor(audioPlayer.currentTime)
      
      // Verificar se chegou ao fim
      if (currentProgress >= totalDuration || audioPlayer.ended) {
        const repeatBtn = document.getElementById('repeatBtn')
        if (repeatBtn?.classList.contains('active')) {
          // Se repeat estiver ativo, reiniciar
          audioPlayer.currentTime = 0
          audioPlayer.play()
        } else {
          // Senão, pausar
          togglePlayPause()
        }
      }
      
      updateProgressBar()
    }
  }, 100) // Atualizar a cada 100ms para mais suavidade
}

function stopProgressUpdate() {
  if (progressInterval) {
    clearInterval(progressInterval)
    progressInterval = null
  }
}

function seekTo(percentage) {
  const audioPlayer = document.getElementById('musicAudioPlayer')
  if (audioPlayer) {
    const seekTime = (percentage / 100) * totalDuration
    audioPlayer.currentTime = seekTime
    currentProgress = Math.floor(seekTime)
  } else {
    currentProgress = (percentage / 100) * totalDuration
  }
  updateProgressBar()
}

function updateProgressBar() {
  const progressBarFill = document.querySelector('.progress-bar-fill')
  const progressBarHandle = document.querySelector('.progress-bar-handle')
  const currentTimeEl = document.getElementById('currentTime')
  const totalTimeEl = document.getElementById('totalTime')
  
  const percentage = (currentProgress / totalDuration) * 100
  
  if (progressBarFill) {
    progressBarFill.style.width = `${percentage}%`
  }
  
  if (progressBarHandle) {
    progressBarHandle.style.left = `${percentage}%`
  }
  
  if (currentTimeEl) {
    currentTimeEl.textContent = formatTime(currentProgress)
  }
  
  if (totalTimeEl) {
    totalTimeEl.textContent = formatTime(totalDuration)
  }
}

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60)
  const secs = Math.floor(seconds % 60)
  return `${mins}:${secs.toString().padStart(2, '0')}`
}

// Estado para o slide de razões
let currentReasonIndex = 0
let shuffledLoveReasons = []
const loveReasons = [
  'Amo seu sorriso, que ilumina qualquer lugar onde você está.',
  'Amo a forma como você me faz sentir especial todos os dias.',
  'Amo sua inteligência e a forma como você vê o mundo.',
  'Amo sua gentileza e como você trata as pessoas ao seu redor.',
  'Amo seus olhos, que conseguem me transmitir tanto sem dizer uma palavra.',
  'Amo sua risada, que é a coisa mais linda que já ouvi.',
  'Amo sua determinação e como você nunca desiste dos seus sonhos.',
  'Amo a forma como você me entende sem eu precisar falar.',
  'Amo sua paixão pela vida e como você me inspira a ser melhor.',
  'Amo simplesmente você ser você, exatamente como é.',
  'Amo como você me faz rir mesmo nos dias mais difíceis.',
  'Amo sua sensibilidade e como você se importa com os detalhes.',
  'Amo a conexão que temos, como se já nos conhecêssemos há anos.',
  'Amo como você me faz sentir em casa, não importa onde estejamos.',
  'Amo cada momento que passo ao seu lado, por mais simples que seja.',
  'Amo sua voz, que acalma minha alma nos momentos mais difíceis.',
  'Amo sua coragem para enfrentar os desafios da vida.',
  'Amo como você me abraça, como se fosse o lugar mais seguro do mundo.',
  'Amo sua honestidade e transparência em tudo que faz.',
  'Amo sua criatividade e como você vê beleza nas coisas simples.',
  'Amo sua paciência comigo, mesmo quando eu sou difícil.',
  'Amo como você me escuta, realmente escuta, quando eu preciso desabafar.',
  'Amo sua generosidade e como você sempre pensa nos outros.',
  'Amo sua força, mesmo quando você acha que não tem.',
  'Amo sua vulnerabilidade, quando você me permite ver quem realmente é.',
  'Amo como você me surpreende com pequenos gestos de carinho.',
  'Amo como você me faz querer ser uma pessoa melhor.',
  'Amo sua lealdade e como posso confiar em você completamente.',
  'Amo sua espontaneidade e como você torna a vida mais divertida.',
  'Amo como você me faz sentir amado de uma forma que nunca senti antes.',
  'Amo sua presença, que transforma qualquer lugar em um lugar especial.',
  'Amo sua forma de me olhar, como se eu fosse a pessoa mais importante do mundo.',
  'Amo sua forma de me tocar, com uma gentileza que me deixa ainda mais louco por você.',
  'Amo como você me faz rir até doer a barriga.',
  'Amo sua forma de me apoiar, mesmo quando meus sonhos parecem impossíveis.',
  'Amo como você me faz sentir que tudo vai ficar bem.',
  'Amo sua forma de me fazer sentir único e especial.',
  'Amo como você me ensina coisas novas todos os dias.',
  'Amo sua forma de me fazer esquecer todos os problemas do mundo.',
  'Amo como você me faz sentir que finalmente encontrei minha pessoa.',
  'Amo sua forma de me fazer sentir que sou suficiente, exatamente como sou.',
  'Amo como você me faz querer construir um futuro ao seu lado.',
  'Amo como você me faz sentir que o amor verdadeiro realmente existe.',
  'Amo simplesmente tudo em você, cada detalhe, cada momento, cada respiração.'
]

// Função para embaralhar array (Fisher-Yates shuffle)
function shuffleArray(array) {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

// Mostrar quantidade de mensagens no console
console.log(`Total de mensagens de amor: ${loveReasons.length}`)

function animatePromises() {
  const container = document.getElementById('promisesContainer')
  if (!container) return
  
  // Limpar conteúdo anterior
  container.innerHTML = ''
  
  // Promessas e sonhos
  const promises = [
    {
      icon: '💍',
      title: 'Sempre te fazer rir',
      text: 'Prometo que todos os dias vou tentar te fazer sorrir, mesmo nos momentos mais difíceis.'
    },
    {
      icon: '🌍',
      title: 'Viajar o mundo juntos',
      text: 'Sonho em conhecer lugares incríveis ao seu lado e criar memórias inesquecíveis.'
    },
    {
      icon: '🌅',
      title: 'Ver muitos pores do sol',
      text: 'Quero passar tardes inteiras ao seu lado, admirando a beleza do mundo.'
    },
    {
      icon: '💝',
      title: 'Te surpreender sempre',
      text: 'Prometo nunca deixar a rotina apagar a magia entre nós.'
    },
    {
      icon: '🏠',
      title: 'Construir um lar',
      text: 'Sonho em criar um lugar nosso, cheio de amor e memórias especiais.'
    },
    {
      icon: '⭐',
      title: 'Apoiar seus sonhos',
      text: 'Estarei sempre ao seu lado para te apoiar em todos os seus projetos.'
    }
  ]
  
  // Criar cards
  promises.forEach((promise, index) => {
    const card = document.createElement('div')
    card.className = 'promise-card opacity-0 transform translate-y-8'
    card.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out'
    card.style.transitionDelay = `${index * 0.2}s`
    
    card.innerHTML = `
      <div class="promise-icon text-5xl md:text-6xl mb-4">${promise.icon}</div>
      <h3 class="promise-title font-['Playfair_Display'] text-[clamp(1.5rem,3vw,2rem)] font-bold text-white mb-3 [text-shadow:1px_1px_10px_rgba(0,0,0,0.3)]">${promise.title}</h3>
      <p class="promise-text text-[clamp(1rem,2vw,1.25rem)] text-white/90 leading-relaxed">${promise.text}</p>
    `
    
    container.appendChild(card)
    
    // Animar card
    setTimeout(() => {
      card.style.opacity = '1'
      card.style.transform = 'translateY(0)'
    }, 100 + (index * 200))
  })
}

function animateLoveReasons() {
  const reasonText = document.getElementById('loveReasonText')
  const nextBtn = document.getElementById('nextReasonBtn')
  
  if (!reasonText || !nextBtn) return
  
  // Remover event listener anterior se existir
  const newNextBtn = nextBtn.cloneNode(true)
  nextBtn.parentNode.replaceChild(newNextBtn, nextBtn)
  
  // Embaralhar mensagens a cada vez que o slide é exibido
  shuffledLoveReasons = shuffleArray(loveReasons)
  
  // Resetar índice
  currentReasonIndex = 0
  
  // Mostrar primeira razão (aleatória)
  reasonText.textContent = shuffledLoveReasons[0]
  reasonText.style.opacity = '0'
  reasonText.style.transform = 'translateY(20px)'
  reasonText.style.transition = 'opacity 0.6s ease-in, transform 0.6s ease-out'
  
  setTimeout(() => {
    reasonText.style.opacity = '1'
    reasonText.style.transform = 'translateY(0)'
    }, 300)
  
  // Configurar botão (usar o novo elemento)
  const updatedBtn = document.getElementById('nextReasonBtn')
  if (updatedBtn) {
    updatedBtn.addEventListener('click', showNextReason)
  }
}

function showNextReason() {
  const reasonText = document.getElementById('loveReasonText')
  if (!reasonText) return
  
  // Fade out
  reasonText.style.opacity = '0'
  reasonText.style.transform = 'translateY(-20px)'
  
    setTimeout(() => {
    // Avançar índice (usando array embaralhado)
    currentReasonIndex = (currentReasonIndex + 1) % shuffledLoveReasons.length
    
    // Se chegou ao fim, embaralhar novamente para nova ordem aleatória
    if (currentReasonIndex === 0) {
      shuffledLoveReasons = shuffleArray(loveReasons)
    }
    
    // Atualizar texto
    reasonText.textContent = shuffledLoveReasons[currentReasonIndex]
    
    // Fade in
    reasonText.style.transform = 'translateY(20px)'
    setTimeout(() => {
      reasonText.style.opacity = '1'
      reasonText.style.transform = 'translateY(0)'
    }, 50)
  }, 300)
}

function calculateDaysTogether() {
  const startDate = new Date('2025-06-25')
  const today = new Date()
  
  // Resetar horas para comparar apenas as datas
  startDate.setHours(0, 0, 0, 0)
  today.setHours(0, 0, 0, 0)
  
  // Calcular diferença em milissegundos
  const diffTime = today - startDate
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))
  
  return diffDays
}

function animateDaysTogether() {
  const daysNumber = document.getElementById('daysNumber')
  const daysHeartContainer = document.getElementById('daysHeartContainer')
  const heartPath = document.querySelector('.heart-path')
  const heartSvg = document.querySelector('.heart-svg')
  
  if (!daysNumber || !daysHeartContainer) {
    console.error('Elementos do slide de dias juntos não encontrados')
    return
  }
  
  // Resetar estados
  daysHeartContainer.style.opacity = '0'
  daysHeartContainer.style.transform = 'scale(0.5)'
  daysHeartContainer.style.transition = 'none'
  
  if (heartPath) {
    heartPath.style.transform = 'scale(0)'
    heartPath.style.transition = 'none'
  }
  
  // Forçar reflow
  void daysHeartContainer.offsetWidth
  
  // Animar entrada do coração
  setTimeout(() => {
    daysHeartContainer.style.transition = 'opacity 1s ease-out, transform 1s cubic-bezier(0.34, 1.56, 0.64, 1)'
    daysHeartContainer.style.opacity = '1'
    daysHeartContainer.style.transform = 'scale(1)'
    
    if (heartPath) {
      heartPath.style.transition = 'transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)'
      heartPath.style.transform = 'scale(1)'
    }
    
    // Animar número com contagem
    const days = calculateDaysTogether()
    if (days >= 0) {
      animateNumber(daysNumber, 0, days, 2000)
    } else {
      daysNumber.textContent = '0'
    }
  }, 300)
  
  // Adicionar pulso ao coração
  if (heartSvg) {
    setTimeout(() => {
      heartSvg.style.animation = 'heartPulse 2s ease-in-out infinite'
    }, 1500)
  }
}

function animateNumber(element, start, end, duration) {
  const startTime = performance.now()
  const range = end - start
  
  function update(currentTime) {
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / duration, 1)
    
    // Easing function (ease-out)
    const easeOut = 1 - Math.pow(1 - progress, 3)
    const current = Math.floor(start + range * easeOut)
    
    element.textContent = current
    
    if (progress < 1) {
      requestAnimationFrame(update)
    } else {
      element.textContent = end
    }
  }
  
  requestAnimationFrame(update)
}

function updateDaysCounter() {
  const daysCounterText = document.getElementById('daysCounterText')
  const daysCounterContainer = document.getElementById('daysCounterContainer')
  
  if (daysCounterText && daysCounterContainer) {
    const days = calculateDaysTogether()
    daysCounterText.textContent = days
    
    // Mostrar contador com fade in
    daysCounterContainer.style.opacity = '0'
    daysCounterContainer.style.transition = 'opacity 1s ease-in'
    
    setTimeout(() => {
      daysCounterContainer.style.opacity = '1'
    }, 100)
  }
}

let noButtonClickCount = 0
let noButtonOriginalSize = null
let yesButtonClicked = false

// Funções globais para onclick inline
window.showProposal = function() {
  const proposalButtonContainer = document.getElementById('proposalButtonContainer')
  const proposalQuestionContainer = document.getElementById('proposalQuestionContainer')
  const pulsingHeart = document.getElementById('pulsingHeart')
  
  if (!proposalButtonContainer || !proposalQuestionContainer) {
    console.error('Elementos não encontrados')
    return
  }
  
  // Esconder botão
  proposalButtonContainer.style.opacity = '0'
  proposalButtonContainer.style.transition = 'opacity 0.5s ease-out'
  proposalButtonContainer.style.pointerEvents = 'none'
  
  // Mostrar proposta com animações
  setTimeout(() => {
    proposalQuestionContainer.style.opacity = '1'
    proposalQuestionContainer.style.pointerEvents = 'auto'
    proposalQuestionContainer.style.transition = 'opacity 0.8s ease-in'
    
    // Animar coração pulsante
    if (pulsingHeart) {
      pulsingHeart.classList.add('pulse-animation')
    }
    
    // Criar confete leve
    createLightConfetti()
  }, 500)
}

window.handleYesProposal = function() {
  createFireworks()
  
  const yesBtn = document.getElementById('proposalYesBtn')
  if (yesBtn) {
    yesBtn.style.transform = 'scale(1.2)'
    setTimeout(() => {
      yesBtn.style.transform = 'scale(1)'
    }, 300)
  }
  
  // Esconder botão "Não" na primeira vez que "Sim" for clicado
  if (!yesButtonClicked) {
    yesButtonClicked = true
    const noBtn = document.getElementById('proposalNoBtn')
    if (noBtn) {
      noBtn.style.opacity = '0'
      noBtn.style.pointerEvents = 'none'
      noBtn.style.transition = 'opacity 0.5s ease-out'
    }
  }
  
  // Não navegar automaticamente - os slides são independentes
}

window.handleNoProposal = function() {
  noButtonClickCount++
  const noBtn = document.getElementById('proposalNoBtn')
  if (!noBtn) return
  
  const container = document.querySelector('[data-slide="8"]')
  if (!container) return
  
  // Guardar tamanho original na primeira vez
  if (!noButtonOriginalSize) {
    const btnRect = noBtn.getBoundingClientRect()
    const computedStyle = window.getComputedStyle(noBtn)
    const span = noBtn.querySelector('span')
    const spanStyle = span ? window.getComputedStyle(span) : null
    
    noButtonOriginalSize = {
      width: btnRect.width,
      height: btnRect.height,
      fontSize: parseFloat(computedStyle.fontSize) || 18,
      paddingTop: parseFloat(computedStyle.paddingTop) || 20,
      paddingRight: parseFloat(computedStyle.paddingRight) || 40,
      paddingBottom: parseFloat(computedStyle.paddingBottom) || 20,
      paddingLeft: parseFloat(computedStyle.paddingLeft) || 40,
      spanPaddingX: spanStyle ? (parseFloat(spanStyle.paddingLeft) || 8) : 8,
      spanPaddingY: spanStyle ? (parseFloat(spanStyle.paddingTop) || 4) : 4,
      borderRadius: computedStyle.borderRadius || '9999px'
    }
  }
  
  // Remover do flex container e tornar fixed (relativo ao viewport, não ao container)
  const buttonsContainer = document.getElementById('proposalButtons')
  if (buttonsContainer && noBtn.parentNode === buttonsContainer) {
    noBtn.style.position = 'fixed' // Fixed em vez de absolute para ser relativo ao viewport
    document.body.appendChild(noBtn) // Adicionar ao body em vez do container
  }
  
  // Obter dimensões do viewport visível
  const viewportWidth = window.innerWidth
  const viewportHeight = window.innerHeight
  
  // Gerar tamanho aleatório (entre 50% e 100% do tamanho original - nunca maior)
  const sizeMultiplier = 0.5 + (Math.random() * 0.5) // Entre 0.5 e 1.0
  
  // Calcular novos tamanhos baseados no multiplicador
  const newWidth = noButtonOriginalSize.width * sizeMultiplier
  const newHeight = noButtonOriginalSize.height * sizeMultiplier
  
  // Aplicar tamanhos diretamente no botão
  noBtn.style.width = newWidth + 'px'
  noBtn.style.height = newHeight + 'px'
  noBtn.style.minWidth = 'auto'
  noBtn.style.minHeight = 'auto'
  
  // Centralizar texto no botão
  noBtn.style.display = 'flex'
  noBtn.style.alignItems = 'center'
  noBtn.style.justifyContent = 'center'
  noBtn.style.textAlign = 'center'
  
  // Gerar border-radius aleatório (entre muito arredondado e mais quadrado)
  // Valores: de 10% (mais quadrado) até 50% (muito arredondado) do menor lado
  const minDimension = Math.min(newWidth, newHeight)
  const borderRadiusMultiplier = 0.1 + (Math.random() * 0.4) // Entre 0.1 e 0.5
  const randomBorderRadius = minDimension * borderRadiusMultiplier
  noBtn.style.borderRadius = randomBorderRadius + 'px'
  
  // Gerar opacidade aleatória (entre 15% e 100%)
  const randomOpacity = 0.15 + (Math.random() * 0.85) // Entre 0.15 e 1.0
  noBtn.style.opacity = randomOpacity.toString()
  
  // Ajustar font-size proporcionalmente usando valor original
  noBtn.style.fontSize = (noButtonOriginalSize.fontSize * sizeMultiplier) + 'px'
  
  // Ajustar padding proporcionalmente usando valores originais
  noBtn.style.paddingTop = (noButtonOriginalSize.paddingTop * sizeMultiplier) + 'px'
  noBtn.style.paddingRight = (noButtonOriginalSize.paddingRight * sizeMultiplier) + 'px'
  noBtn.style.paddingBottom = (noButtonOriginalSize.paddingBottom * sizeMultiplier) + 'px'
  noBtn.style.paddingLeft = (noButtonOriginalSize.paddingLeft * sizeMultiplier) + 'px'
  
  // Ajustar padding do span interno também
  const span = noBtn.querySelector('span')
  if (span) {
    span.style.padding = `${noButtonOriginalSize.spanPaddingY * sizeMultiplier}px ${noButtonOriginalSize.spanPaddingX * sizeMultiplier}px`
  }
  
  // Calcular limites seguros baseados APENAS no viewport
  const margin = 20
  const minX = margin
  const maxX = Math.max(margin, viewportWidth - newWidth - margin)
  const minY = margin
  const maxY = Math.max(margin, viewportHeight - newHeight - margin)
  
  // Garantir que há espaço suficiente
  if (maxX > minX && maxY > minY) {
    // Gerar posição completamente aleatória dentro dos limites do viewport
    const newX = Math.random() * (maxX - minX) + minX
    const newY = Math.random() * (maxY - minY) + minY
    
    noBtn.style.left = newX + 'px'
    noBtn.style.top = newY + 'px'
    noBtn.style.right = 'auto'
    noBtn.style.bottom = 'auto'
    noBtn.style.transform = 'none'
  } else {
    // Fallback: centralizar se não houver espaço
    noBtn.style.left = '50%'
    noBtn.style.top = '50%'
    noBtn.style.right = 'auto'
    noBtn.style.bottom = 'auto'
    noBtn.style.transform = 'translate(-50%, -50%)'
  }
  
  noBtn.style.transition = 'all 0.3s ease-out'
  noBtn.style.zIndex = '1000'
  noBtn.style.pointerEvents = 'auto'
  
  // Efeito visual de clique
  setTimeout(() => {
    if (noBtn.style.left === '50%' && noBtn.style.top === '50%') {
      noBtn.style.transform = 'translate(-50%, -50%) scale(0.95)'
      setTimeout(() => {
        noBtn.style.transform = 'translate(-50%, -50%)'
      }, 150)
    } else {
      noBtn.style.transform = 'scale(0.95)'
      setTimeout(() => {
        noBtn.style.transform = 'none'
      }, 150)
    }
  }, 10)
}

function animateProposal() {
  // Resetar estados
  const proposalButtonContainer = document.getElementById('proposalButtonContainer')
  const proposalQuestionContainer = document.getElementById('proposalQuestionContainer')
  const proposalNoBtn = document.getElementById('proposalNoBtn')
  
  if (proposalButtonContainer) {
    proposalButtonContainer.style.opacity = '1'
    proposalButtonContainer.style.pointerEvents = 'auto'
  }
  
  if (proposalQuestionContainer) {
    proposalQuestionContainer.style.opacity = '0'
    proposalQuestionContainer.style.pointerEvents = 'none'
  }
  
  // Resetar contador e posição do botão Não
  noButtonClickCount = 0
  noButtonOriginalSize = null
  yesButtonClicked = false
  if (proposalNoBtn) {
    proposalNoBtn.style.position = 'static'
    proposalNoBtn.style.transform = 'none'
    proposalNoBtn.style.left = 'auto'
    proposalNoBtn.style.top = 'auto'
    proposalNoBtn.style.right = 'auto'
    proposalNoBtn.style.bottom = 'auto'
    proposalNoBtn.style.zIndex = 'auto'
    proposalNoBtn.style.width = 'auto'
    proposalNoBtn.style.height = 'auto'
    proposalNoBtn.style.fontSize = ''
    proposalNoBtn.style.padding = ''
    proposalNoBtn.style.transform = 'none'
    proposalNoBtn.style.transformOrigin = ''
    proposalNoBtn.style.display = ''
    proposalNoBtn.style.alignItems = ''
    proposalNoBtn.style.justifyContent = ''
    proposalNoBtn.style.textAlign = ''
    proposalNoBtn.style.borderRadius = ''
    proposalNoBtn.style.opacity = ''
    proposalNoBtn.style.pointerEvents = ''
    
    // Resetar padding do span interno
    const span = proposalNoBtn.querySelector('span')
    if (span) {
      span.style.padding = ''
    }
    
    // Garantir que está no container correto
    const buttonsContainer = document.getElementById('proposalButtons')
    if (buttonsContainer) {
      // Se estiver no body, mover de volta para o container
      if (proposalNoBtn.parentNode === document.body) {
        buttonsContainer.appendChild(proposalNoBtn)
      } else if (proposalNoBtn.parentNode !== buttonsContainer) {
        buttonsContainer.appendChild(proposalNoBtn)
      }
    }
  }
}

function createFireworks() {
  const container = document.getElementById('fireworksContainer')
  if (!container) return
  
  // Mais emojis românticos, com foco em corações e presentes
  const emojis = [
    '💖', '💕', '💗', '💝', '💞', '💓', '💘', '💟', '❤️', '🧡', '💛', '💚', '💙', '💜', '🖤', '🤍', '🤎',
    '🎁', '🎀', '🎂', '🍰', '🌹', '🌷', '🌺', '🌸', '💐', '🌻',
    '🎉', '🎊', '✨', '⭐', '🌟', '💫', '🎈', '🎆', '🎇', '🏆'
  ]
  const count = 50 // Aumentado de 30 para 50
  
  for (let i = 0; i < count; i++) {
    const emoji = document.createElement('div')
    emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)]
    emoji.style.position = 'absolute'
    emoji.style.fontSize = '2rem'
    emoji.style.left = '50%'
    emoji.style.top = '50%'
    emoji.style.pointerEvents = 'none'
    emoji.style.zIndex = '9999'
    
    const angle = (Math.PI * 2 * i) / count
    const distance = 200 + Math.random() * 100
    const duration = 1.5 + Math.random() * 0.5
    
    emoji.style.transform = `translate(-50%, -50%)`
    emoji.style.transition = `all ${duration}s ease-out`
    
    container.appendChild(emoji)
    
    // Animar
    setTimeout(() => {
      const x = Math.cos(angle) * distance
      const y = Math.sin(angle) * distance
      emoji.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`
      emoji.style.opacity = '0'
    }, 10)
    
    // Remover após animação
    setTimeout(() => {
      emoji.remove()
    }, duration * 1000 + 100)
  }
}


function setupAnimations() {
  // Animações iniciais
  triggerSlideAnimations(0)
}



function createConfetti() {
  const colors = ['#ff6b9d', '#c44569', '#f8b500', '#ffd93d', '#ff6b9d']
  const confettiCount = 100
  
  for (let i = 0; i < confettiCount; i++) {
    const confetti = document.createElement('div')
    confetti.className = 'confetti'
    confetti.style.left = Math.random() * 100 + '%'
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
    confetti.style.animationDelay = Math.random() * 0.5 + 's'
    confetti.style.animationDuration = (Math.random() * 2 + 2) + 's'
    document.body.appendChild(confetti)
    
    setTimeout(() => {
      confetti.remove()
    }, 4000)
  }
}

function createLightConfetti() {
  const colors = ['#ff6b9d', '#c44569', '#ffd93d', '#ff6b9d', '#f8b500']
  const confettiCount = 50 // Menos confete para ser mais leve
  
  for (let i = 0; i < confettiCount; i++) {
    const confetti = document.createElement('div')
    confetti.className = 'light-confetti'
    confetti.style.position = 'fixed'
    confetti.style.width = '8px'
    confetti.style.height = '8px'
    confetti.style.left = Math.random() * 100 + '%'
    confetti.style.top = '-10px'
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
    confetti.style.borderRadius = '50%'
    confetti.style.pointerEvents = 'none'
    confetti.style.zIndex = '9999'
    confetti.style.animation = `lightConfettiFall ${2 + Math.random() * 2}s linear forwards`
    confetti.style.animationDelay = Math.random() * 0.3 + 's'
    document.body.appendChild(confetti)
    
    setTimeout(() => {
      confetti.remove()
    }, 5000)
  }
}

// Animação do slide final - efeito de digitação
let finalMessageAnimationStarted = false
let finalMessageTimeout = null

function animateFinalMessage() {
  // Resetar se já estava em execução
  if (finalMessageTimeout) {
    clearTimeout(finalMessageTimeout)
  }
  
  const messageElement = document.getElementById('finalMessageText')
  if (!messageElement) return
  
  // Verificar se estamos no slide correto
  if (currentSlide !== 9) {
    return
  }
  
  // Resetar texto
  messageElement.textContent = ''
  finalMessageAnimationStarted = false
  
  // Aguardar 1 segundo antes de começar a digitar
  finalMessageTimeout = setTimeout(() => {
    if (currentSlide !== 9) return
    
    finalMessageAnimationStarted = true
    const fullText = 'Espero que guarde esse presente como algo bom na sua memória e que algum dia você possa contar aos nosso filhos a história de como te pedi em namoro. Te amo em todas as vidas 💜'
    typeWriterFinalMessage(messageElement, fullText, 0)
  }, 1000)
}

function typeWriterFinalMessage(element, text, index) {
  if (currentSlide !== 9 || !finalMessageAnimationStarted) {
    return
  }
  
  if (index < text.length) {
    element.textContent = text.substring(0, index + 1)
    // Velocidade mais lenta: 60ms por caractere (era 30ms)
    setTimeout(() => {
      typeWriterFinalMessage(element, text, index + 1)
    }, 60)
  }
}

// Inicializar quando DOM estiver pronto
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init)
} else {
  init()
}
