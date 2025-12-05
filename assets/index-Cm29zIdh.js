(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))t(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function a(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function t(s){if(s.ep)return;s.ep=!0;const i=a(s);fetch(s.href,i)}})();(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(t){if(t.ep)return;t.ep=!0;const s=o(t);fetch(t.href,s)}})();(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(t){if(t.ep)return;t.ep=!0;const s=o(t);fetch(t.href,s)}})();(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(t){if(t.ep)return;t.ep=!0;const s=o(t);fetch(t.href,s)}})();(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(t){if(t.ep)return;t.ep=!0;const s=o(t);fetch(t.href,s)}})();(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(t){if(t.ep)return;t.ep=!0;const s=o(t);fetch(t.href,s)}})();const Xe="/assets/capa-lisboa-ByYRjH84.jpeg",Ze="/assets/lisboa-ana-vitoria-CLOLizrS.mp3";let _=0,G=!1;const Ve=[],ae=10;let Se=!1;function et(){return`
    <!-- Navigation Dots -->
    <nav class="fixed right-2 top-1/2 -translate-y-1/2 z-[100] flex right-2 md:right-8 flex-col gap-1.5 md:gap-4">
      ${Array.from({length:ae},(e,o)=>`
        <button 
          class="nav-dot w-2 h-2 md:w-3 md:h-3 rounded-full bg-white/30 border border-white/50 md:border-2 cursor-pointer transition-all duration-300 hover:bg-white/50 hover:scale-125 ${o===0?"active":""}" 
          data-slide="${o}"
          aria-label="Ir para slide ${o+1}"
        ></button>
      `).join("")}
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
  `}function ke(){const e=document.querySelector("#app");e.innerHTML=et(),document.querySelectorAll(".slide").forEach(o=>{Ve.push(o)}),tt(),ot(),kt(),ft(),at(0)}function tt(){document.querySelectorAll(".nav-dot").forEach((e,o)=>{e.addEventListener("click",()=>{ge(o)})})}let $=null;function we(){const e=document.querySelector("nav");e&&window.innerWidth<768&&_>0&&_<ae-1&&($&&(clearTimeout($),$=null),e.style.opacity="1",e.style.pointerEvents="auto",$=setTimeout(()=>{e.style.opacity="0",e.style.pointerEvents="none"},2e3))}function ot(){let e=0;function o(n){const r=document.getElementById("loveMessagesContainer"),d=document.getElementById("promisesContainer");return r&&(r.contains(n)||r===n)?r:d&&(d.contains(n)||d===n)?d:null}function a(n,r){if(!n||n.id==="loveMessagesContainer"&&!Se)return!1;const d=n.scrollTop<=0,m=n.scrollTop>=n.scrollHeight-n.clientHeight-1;return r==="down"?!m:!d}window.addEventListener("wheel",n=>{if(G)return;const r=o(n.target);if(r){const m=n.deltaY>0?"down":"up";if(a(r,m)){n.stopPropagation();return}const h=r.scrollTop<=0,y=r.scrollTop>=r.scrollHeight-r.clientHeight-1;if(m==="down"&&!y){n.stopPropagation();return}if(m==="up"&&!h){n.stopPropagation();return}}const d=Date.now();d-e<800||(e=d,we(),n.deltaY>0?Ce():Be())},{passive:!0});let t=0,s=0;document.addEventListener("touchstart",n=>{t=n.changedTouches[0].screenY,n.target},{passive:!0}),document.addEventListener("touchmove",n=>{const r=o(n.target);if(r){const d=t>n.changedTouches[0].screenY?"down":"up";if(a(r,d)){n.stopPropagation();return}}},{passive:!0}),document.addEventListener("touchend",n=>{s=n.changedTouches[0].screenY;const r=o(n.target);if(r){const d=t-s;if(Math.abs(d)>50){const m=d>0?"down":"up";if(a(r,m)){n.stopPropagation();return}const h=r.scrollTop<=0,y=r.scrollTop>=r.scrollHeight-r.clientHeight-1;if(m==="down"&&!y){n.stopPropagation();return}if(m==="up"&&!h){n.stopPropagation();return}}else{n.stopPropagation();return}}i()},{passive:!0});function i(){if(G)return;const n=t-s;Math.abs(n)>50&&(we(),n>0?Ce():Be())}window.addEventListener("keydown",n=>{G||(we(),n.key==="ArrowDown"||n.key==="PageDown"?Ce():(n.key==="ArrowUp"||n.key==="PageUp")&&Be())})}function Ce(){_<ae-1&&ge(_+1)}function Be(){_>0&&ge(_-1)}function ge(e){if(G||e===_)return;if(_===9&&e!==9){J&&(clearTimeout(J),J=null),fe=!1;const t=document.getElementById("finalMessageText");t&&(t.textContent="")}if(_===4&&e!==4){const t=document.getElementById("musicAudioPlayer");if(t&&!t.paused){t.pause(),t.currentTime=0,t.volume=1,se=!1,Ge();const s=document.getElementById("playPauseBtn");if(s){const r=s.querySelector(".play-icon"),d=s.querySelector(".pause-icon");r&&r.classList.remove("hidden"),d&&d.classList.add("hidden")}const i=document.getElementById("musicIntroText"),n=document.getElementById("musicPlayerContainer");i&&(i.style.opacity="0"),n&&(n.style.opacity="0",n.style.transform="translateY(32px)")}}G=!0,_=e,Ve.forEach((t,s)=>{s===e?(t.classList.add("active"),t.classList.remove("prev","next")):s<e?(t.classList.remove("active","next"),t.classList.add("prev")):(t.classList.remove("active","prev"),t.classList.add("next"))}),document.querySelectorAll(".nav-dot").forEach((t,s)=>{s===e?t.classList.add("active"):t.classList.remove("active")});const o=document.querySelector("nav");o&&window.innerWidth<768&&($&&(clearTimeout($),$=null),e===0||e===ae-1?(o.style.opacity="1",o.style.pointerEvents="auto"):(o.style.opacity="1",o.style.pointerEvents="auto",$=setTimeout(()=>{o.style.opacity="0",o.style.pointerEvents="none"},2e3))),Oe(e);const a=document.getElementById("scrollIndicator");a&&(e===ae-1?(a.classList.add("opacity-0"),a.classList.remove("opacity-100")):(a.classList.add("opacity-100"),a.classList.remove("opacity-0"))),setTimeout(()=>{G=!1},1e3)}function at(e){ge(e)}function Oe(e){switch(e){case 0:st();break;case 1:nt();break;case 2:ht(),Ye();break;case 3:it();break;case 4:vt();break;case 5:Et();break;case 6:St();break;case 7:Pt();break;case 8:At();break;case 9:_t();break}}function st(){document.querySelectorAll(".message-bubble").forEach((e,o)=>{setTimeout(()=>{e.classList.add("show")},o*1500)})}function nt(){document.querySelectorAll(".floating-hearts .heart").forEach((e,o)=>{setTimeout(()=>{e.style.animation="floatUp 4s ease-in-out infinite",e.style.animationDelay=`${o*.3}s`},100)})}function it(){const e=document.getElementById("loveTitle"),o=document.getElementById("loveMessagesContainer");if(!e||!o)return;Se=!1,o.style.overflow="hidden",o.style.pointerEvents="none",o.innerHTML="",o.style.opacity="0",e.style.opacity="1",e.style.transition="opacity 1s ease-out";const a=[{text:"Meu amor, sinceramente eu não tenho palavras pra expressar o quanto sou grata por você ter aparecido na minha vida. Sério, sei que já falei isso outras vezes kkkkk, mas é que apesar do pouco tempo que a gente tem de contato, parece que eu te conheço há muito mais tempo.",sender:"her",delay:500},{text:"Pode até parecer cedo pelo que vou dizer agora, e espero de coração que não te incomode ou soe precipitado...",sender:"her",delay:4e3},{text:"Mas eu te amo. Muito. ❤",sender:"her",delay:3e3},{text:"Kkkkk em que mundo vc ouvir da mulher que vc é completamente apaixonado que ela te ama pode se tornar algo que ruim, algo que incomode, não tem como kkk",sender:"him",delay:5e3},{text:"Eu sou mt sentimento e conexão, e eu nunca senti algo tão forte por alguém em tão pouco tempo como eu sinto por vc, de fato parece que a gnt se conhece a anos, parece que já vivemos tanto, que nos conhecemos tanto, as vezes parece um sonho, parece que a qualquer momento eu vou acordar com o despertador tocando e perceber que td isso só aconteceu na minha mente",sender:"him",delay:6e3},{text:"como eu disse eu sou sentimento e sinto por vc desde o primeiro olhar que a gnt trocou, eu já sei que te amo desde o primeiro dia que nos vimos e eu posso provar kk eu já sei que te amo desde o primeiro sorriso que eu vi de perto, já sei que te amo desde a primeira vez que olhei no fundo dos seus olhos e vi quem vc é",sender:"him",delay:6e3},{text:"eu não queria te assustar, ia tentar aguentar pelo menos até o pedido, mas que bom que não preciso mais segurar isso…",sender:"him",delay:4e3},{text:"Eu amo você minha linda 💜",sender:"him",delay:3e3}];let t=0;a.forEach(s=>{t+=s.delay}),setTimeout(()=>{e.style.opacity="0",e.style.transition="opacity 1s ease-out",setTimeout(()=>{o.style.opacity="1",o.style.transition="opacity 1s ease-in";const s=[];a.forEach(n=>{const r=document.createElement("div");r.className=`message-bubble ${n.sender==="her"?"bg-[#e1ffc7] text-[#000] self-start":"bg-[#1a6a5c] text-white self-end"} opacity-0`,r.style.transition="opacity 0.5s ease-in, transform 0.5s ease-out",r.style.transform="translateY(10px)";const d=document.createElement("p");d.className="text-base md:text-lg leading-relaxed",d.textContent=n.text,r.appendChild(d),o.appendChild(r),s.push(r)});let i=0;s.forEach((n,r)=>{i+=a[r].delay,setTimeout(()=>{n.style.opacity="1",n.style.transform="translateY(0)",setTimeout(()=>{const d=n.getBoundingClientRect(),m=o.getBoundingClientRect();(d.bottom>m.bottom||d.top<m.top)&&n.scrollIntoView({behavior:"smooth",block:"nearest"})},200),r===s.length-1&&setTimeout(()=>{Se=!0,o.style.overflow="auto",o.style.pointerEvents="auto"},500)},i)})},1e3)},3e3)}let L={date:"2025-06-25",city:"São Paulo",latitude:-23.5505,longitude:-46.6333,time:"20:00"};const rt=[{name:"Sirius",ra:101.287,dec:-16.716,mag:-1.46},{name:"Canopus",ra:95.988,dec:-52.696,mag:-.74},{name:"Arcturus",ra:213.915,dec:19.182,mag:-.05},{name:"Vega",ra:279.235,dec:38.784,mag:.03},{name:"Capella",ra:79.172,dec:45.998,mag:.08},{name:"Rigel",ra:78.634,dec:-8.202,mag:.13},{name:"Procyon",ra:114.825,dec:5.225,mag:.34},{name:"Betelgeuse",ra:88.793,dec:7.407,mag:.45},{name:"Achernar",ra:24.429,dec:-57.237,mag:.46},{name:"Hadar",ra:210.956,dec:-60.373,mag:.61},{name:"Altair",ra:297.695,dec:8.868,mag:.76},{name:"Aldebaran",ra:68.98,dec:16.509,mag:.87},{name:"Antares",ra:247.352,dec:-26.432,mag:.96},{name:"Spica",ra:201.298,dec:-11.161,mag:.98},{name:"Pollux",ra:116.329,dec:28.026,mag:1.14},{name:"Fomalhaut",ra:344.413,dec:-29.622,mag:1.16},{name:"Deneb",ra:310.358,dec:45.28,mag:1.25},{name:"Mimosa",ra:191.93,dec:-59.689,mag:1.25},{name:"Regulus",ra:152.093,dec:11.967,mag:1.36},{name:"Adhara",ra:104.656,dec:-28.972,mag:1.5}],qe={Órion:{stars:["Rigel","Betelgeuse","Aldebaran"],connections:[["Rigel","Betelgeuse"],["Betelgeuse","Aldebaran"]],meaning:"Órion, o Caçador, é uma das constelações mais reconhecidas. Na mitologia, representa força e determinação. Ver Órion no céu simboliza novos começos e a busca por seus objetivos com coragem.",season:"inverno"},"Triângulo de Verão":{stars:["Vega","Altair","Deneb"],connections:[["Vega","Altair"],["Altair","Deneb"],["Deneb","Vega"]],meaning:"O Triângulo de Verão é formado por três das estrelas mais brilhantes do céu. Representa harmonia, equilíbrio e a conexão entre diferentes pontos que formam algo maior e mais belo.",season:"verão"},"Cão Maior":{stars:["Sirius","Adhara"],connections:[["Sirius","Adhara"]],meaning:"Cão Maior abriga Sirius, a estrela mais brilhante do céu. Simboliza lealdade, proteção e a luz que guia nos momentos mais escuros. Ver Sirius é um sinal de esperança e direção.",season:"inverno"},"Cão Menor":{stars:["Procyon"],connections:[],meaning:"Cão Menor, com Procyon, representa companheirismo e fidelidade. É a constelação que acompanha Órion, simbolizando que não estamos sozinhos em nossa jornada.",season:"inverno"},Boiadeiro:{stars:["Arcturus"],connections:[],meaning:"Boiadeiro, com Arcturus, representa proteção e cuidado. Na mitologia, é o guardião que vigia e protege. Ver Arcturus no céu simboliza segurança e estabilidade.",season:"primavera"},Escorpião:{stars:["Antares"],connections:[],meaning:"Escorpião, com Antares (a estrela rival de Marte), representa transformação e renovação. Simboliza a capacidade de superar desafios e renascer mais forte.",season:"verão"},Leão:{stars:["Regulus"],connections:[],meaning:"Leão, com Regulus (o coração do leão), representa coragem, liderança e nobreza. Ver Regulus no céu simboliza força interior e a coragem de seguir seu coração.",season:"primavera"},Virgem:{stars:["Spica"],connections:[],meaning:"Virgem, com Spica, representa pureza, sabedoria e crescimento. Simboliza novos começos e o florescimento de algo belo e promissor.",season:"primavera"},Cisne:{stars:["Deneb"],connections:[],meaning:"Cisne, com Deneb, representa transformação e elevação. Na mitologia, o cisne voa alto e livre, simbolizando a capacidade de superar limitações e alcançar novos horizontes.",season:"verão"},Águia:{stars:["Altair"],connections:[],meaning:"Águia, com Altair, representa visão clara, liberdade e perspectiva elevada. Simboliza a capacidade de ver além e encontrar o caminho certo.",season:"verão"},Lira:{stars:["Vega"],connections:[],meaning:"Lira, com Vega, representa música, harmonia e arte. Na mitologia, é o instrumento de Orfeu, simbolizando o poder da música e da beleza para tocar corações.",season:"verão"}};async function _e(e,o,a){try{const t=new Date(a),s=new Date;s.setHours(0,0,0,0),t.setHours(0,0,0,0);const i=a.split("T")[0];if(t<s)try{const n=await fetch(`https://archive-api.open-meteo.com/v1/archive?latitude=${e}&longitude=${o}&start_date=${i}&end_date=${i}&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=auto`);if(n.ok){const r=await n.json();if(r.daily&&r.daily.weather_code&&r.daily.weather_code.length>0){const d=r.daily.weather_code[0],m=r.daily.temperature_2m_max[0],h=r.daily.temperature_2m_min[0],y=Math.round((m+h)/2),g=Fe(d),u=De(d);return{temperature:y,description:u,icon:Ne(g),condition:g}}}}catch(n){console.warn("Erro ao buscar dados históricos, usando estimativa:",n)}else try{const n=await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${e}&longitude=${o}&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=auto&forecast_days=1`);if(n.ok){const r=await n.json();if(r.daily&&r.daily.weather_code&&r.daily.weather_code.length>0){const d=r.daily.weather_code[0],m=r.daily.temperature_2m_max[0],h=r.daily.temperature_2m_min[0],y=Math.round((m+h)/2),g=Fe(d),u=De(d);return{temperature:y,description:u,icon:Ne(g),condition:g}}}}catch(n){console.warn("Erro ao buscar previsão, usando estimativa:",n)}return Ie(e,a)}catch(t){return console.error("Erro ao buscar dados do clima:",t),Ie(e,a)}}function Fe(e){return e===0?"Clear":e>=1&&e<=3||e>=45&&e<=48?"Clouds":e>=51&&e<=67?"Rain":e>=71&&e<=77?"Snow":e>=80&&e<=99?"Rain":"Clouds"}function De(e){return e===0?"céu limpo":e>=1&&e<=3?"parcialmente nublado":e>=45&&e<=48?"névoa":e>=51&&e<=55?"garoa":e>=56&&e<=57?"garoa congelante":e>=61&&e<=67?"chuva":e>=71&&e<=77?"neve":e>=80&&e<=82?"aguaceiros":e>=85&&e<=86?"neve":e>=95&&e<=99?"trovoada":"variável"}function Ne(e){return e==="Clear"?"01d":e==="Clouds"?"02d":e==="Rain"?"10d":e==="Snow"?"13d":"02d"}function Ie(e,o){const a=new Date(o).getMonth()+1;let t=20;e>-15?t=28:e>-23?t=22:t=18;const s=t+({1:3,2:2,3:0,4:-2,5:-4,6:-5,7:-4,8:-2,9:0,10:2,11:3,12:3}[a]||0);let i="Clear",n="céu limpo";if(a>=6&&a<=8)i=Math.random()>.3?"Clear":"Clouds",n=i==="Clear"?"céu limpo":"parcialmente nublado";else{const r=Math.random();r>.6?(i="Clear",n="céu limpo"):r>.3?(i="Clouds",n="parcialmente nublado"):(i="Rain",n="chuva")}return{temperature:Math.round(s),description:n,icon:i==="Clear"?"01d":i==="Clouds"?"02d":"10d",condition:i}}function lt(e,o){const[a,t]=e.split(":").map(Number),s=a+t/60;let i="night";return s>=5&&s<7?i="dawn":s>=7&&s<18?i="day":s>=18&&s<20&&(i="dusk"),{night:{base:"#0a0a1a",gradient:[{stop:0,color:"rgba(138, 43, 226, 0.1)"},{stop:1,color:"rgba(0, 0, 0, 0.9)"}],starsVisible:!0},dawn:{base:o==="Clear"?"#1a1a3e":"#2a2a4e",gradient:o==="Clear"?[{stop:0,color:"rgba(255, 140, 0, 0.3)"},{stop:.5,color:"rgba(255, 200, 100, 0.2)"},{stop:1,color:"rgba(50, 50, 100, 0.8)"}]:[{stop:0,color:"rgba(150, 150, 180, 0.4)"},{stop:1,color:"rgba(50, 50, 80, 0.9)"}],starsVisible:s<6},day:{base:o==="Clear"?"#87CEEB":o==="Clouds"?"#B0C4DE":"#708090",gradient:o==="Clear"?[{stop:0,color:"rgba(135, 206, 250, 0.8)"},{stop:.3,color:"rgba(173, 216, 230, 0.6)"},{stop:1,color:"rgba(70, 130, 180, 0.4)"}]:o==="Clouds"?[{stop:0,color:"rgba(176, 196, 222, 0.7)"},{stop:1,color:"rgba(105, 105, 105, 0.5)"}]:[{stop:0,color:"rgba(112, 128, 144, 0.8)"},{stop:1,color:"rgba(70, 70, 70, 0.6)"}],starsVisible:!1},dusk:{base:o==="Clear"?"#2a1a3e":"#3a2a4e",gradient:o==="Clear"?[{stop:0,color:"rgba(255, 69, 0, 0.4)"},{stop:.3,color:"rgba(255, 140, 0, 0.3)"},{stop:.7,color:"rgba(138, 43, 226, 0.2)"},{stop:1,color:"rgba(0, 0, 0, 0.8)"}]:[{stop:0,color:"rgba(150, 120, 150, 0.4)"},{stop:1,color:"rgba(50, 50, 80, 0.9)"}],starsVisible:s>19}}[i]}function dt(e,o,a,t){const s=(t-7)/10,i=o*.15+o*.7*s,n=a*.25,r=60,d=r*2.5,m=e.createRadialGradient(i,n,0,i,n,d);m.addColorStop(0,"rgba(255, 255, 200, 0.8)"),m.addColorStop(.3,"rgba(255, 200, 100, 0.6)"),m.addColorStop(.6,"rgba(255, 150, 50, 0.3)"),m.addColorStop(1,"rgba(255, 100, 0, 0)"),e.fillStyle=m,e.beginPath(),e.arc(i,n,d,0,Math.PI*2),e.fill();const h=e.createRadialGradient(i,n,0,i,n,r);h.addColorStop(0,"#FFD700"),h.addColorStop(.7,"#FFA500"),h.addColorStop(1,"#FF8C00"),e.fillStyle=h,e.beginPath(),e.arc(i,n,r,0,Math.PI*2),e.fill(),e.fillStyle="rgba(255, 255, 255, 0.6)",e.beginPath(),e.arc(i,n,r*.6,0,Math.PI*2),e.fill()}let Me=0;function Ee(e,o,a){Me+=.3,e.save();const t=200,s=8;for(let i=0;i<t;i++){const n=o/t*i,r=Me*s*(1+i%3)%o,d=n+r,m=-20+i%5*30,h=Me*s*(1+i%3)%(a+40),y=m+h,g=15+i%3*5,u=.6+i%2*.2;e.strokeStyle=`rgba(173, 216, 230, ${u})`,e.lineWidth=2,e.beginPath(),e.moveTo(d,y),e.lineTo(d,y+g),e.stroke()}e.restore()}let Z=0,me=null;function Re(e,o,a,t,s=!1){me===null&&(me=Date.now()),Z+=.08;const i=t==="Clouds"?6:t==="Rain"?10:3,n=t==="Clouds"?.7:t==="Rain"?.85:.4;if(s){const[h,y]=L.time.split(":").map(Number),g=h+y/60,u=g>=7&&g<15.5,b=g>=15.5&&g<18,E=g>=18&&g<20,S=(q==null?void 0:q.weatherCondition)||t;if(u||b||E){const c=e.createLinearGradient(0,0,0,a);if(u)S==="Clear"?(c.addColorStop(0,"#87CEEB"),c.addColorStop(.5,"#87CEEB"),c.addColorStop(.8,"#B0D4E6"),c.addColorStop(1,"#C8E0F0")):S==="Clouds"?(c.addColorStop(0,"#B0C4DE"),c.addColorStop(.5,"#B8C8E0"),c.addColorStop(.8,"#C0D0E0"),c.addColorStop(1,"#C8D8E8")):(c.addColorStop(0,"#708090"),c.addColorStop(.5,"#788898"),c.addColorStop(.8,"#8898A8"),c.addColorStop(1,"#98A8B8"));else if(b){const x=(g-15.5)/2.5,v=(M,z,A)=>{const k=M.replace("#",""),I=z.replace("#",""),F=parseInt(k.substr(0,2),16),l=parseInt(k.substr(2,2),16),p=parseInt(k.substr(4,2),16),f=parseInt(I.substr(0,2),16),w=parseInt(I.substr(2,2),16),P=parseInt(I.substr(4,2),16),B=Math.round(F+(f-F)*A),C=Math.round(l+(w-l)*A),T=Math.round(p+(P-p)*A);return`#${B.toString(16).padStart(2,"0")}${C.toString(16).padStart(2,"0")}${T.toString(16).padStart(2,"0")}`};S==="Clear"?(c.addColorStop(0,v("#87CEEB","#FF8C42",x)),c.addColorStop(.5,v("#B0D4E6","#FF7F50",x)),c.addColorStop(.8,v("#B0D4E6","#FF6347",x)),c.addColorStop(1,v("#C8E0F0","#FF6B6B",x))):S==="Clouds"?(c.addColorStop(0,v("#B0C4DE","#FFA07A",x)),c.addColorStop(.5,v("#B8C8E0","#FF8C69",x)),c.addColorStop(.8,v("#C0D0E0","#A0522D",x)),c.addColorStop(1,v("#C8D8E8","#CD5C5C",x))):(c.addColorStop(0,v("#708090","#D2691E",x)),c.addColorStop(.5,v("#788898","#CD853F",x)),c.addColorStop(.8,v("#8898A8","#8B4513",x)),c.addColorStop(1,v("#98A8B8","#A0522D",x)))}else E&&(S==="Clear"?(c.addColorStop(0,"#FF8C42"),c.addColorStop(.2,"#FF7F50"),c.addColorStop(.4,"#FF6B6B"),c.addColorStop(.6,"#FF6347"),c.addColorStop(.75,"#FF4500"),c.addColorStop(.85,"#DC143C"),c.addColorStop(.95,"#8B0000"),c.addColorStop(1,"#6B0000")):S==="Clouds"?(c.addColorStop(0,"#FFA07A"),c.addColorStop(.3,"#FF8C69"),c.addColorStop(.5,"#CD5C5C"),c.addColorStop(.7,"#A0522D"),c.addColorStop(.85,"#8B4513"),c.addColorStop(1,"#654321")):(c.addColorStop(0,"#D2691E"),c.addColorStop(.3,"#CD853F"),c.addColorStop(.5,"#A0522D"),c.addColorStop(.7,"#8B4513"),c.addColorStop(.85,"#654321"),c.addColorStop(1,"#4B2C1A")));e.fillStyle=c,e.fillRect(0,0,o,a)}}const r=Date.now()-me,d=2e3,m=Math.min(1,r/d);for(let h=0;h<i;h++){const y=o/(i+1)*(h+1),g=5+h%3*3,u=Z*g%(o+300)-150,b=y+u,E=a*(.12+h%4*.12),S=Math.sin(Z*.05+h*.5)*15,c=Math.max(0,Math.min(a*.6,E+S)),x=Math.sin(Z*.03+h)*15,v=100+h%3*50,M=Math.max(60,Math.min(200,v+x)),z=.9+Math.sin(Z*.05+h)*.1,A=n*z,k=h*200/d,I=Math.max(0,Math.min(1,(m-k)/(1-k))),F=Math.max(0,Math.min(1,A*I));e.save(),ct(e,b,c,M,F),e.restore()}}function ct(e,o,a,t,s){e.save(),e.globalAlpha=s;const i=e.createRadialGradient(o,a-t*.2,0,o,a,t);i.addColorStop(0,`rgba(255, 255, 255, ${s*.95})`),i.addColorStop(.5,`rgba(255, 255, 255, ${s*.8})`),i.addColorStop(1,`rgba(240, 240, 250, ${s*.6})`),[{x:o,y:a,r:t*.65},{x:o-t*.45,y:a,r:t*.55},{x:o+t*.45,y:a,r:t*.55},{x:o-t*.25,y:a-t*.25,r:t*.5},{x:o+t*.25,y:a-t*.25,r:t*.5},{x:o,y:a-t*.3,r:t*.45},{x:o-t*.35,y:a+t*.15,r:t*.4},{x:o+t*.35,y:a+t*.15,r:t*.4},{x:o-t*.6,y:a-t*.1,r:t*.35},{x:o+t*.6,y:a-t*.1,r:t*.35}].forEach((n,r)=>{const d=e.createRadialGradient(n.x,n.y-n.r*.3,0,n.x,n.y,n.r);d.addColorStop(0,`rgba(255, 255, 255, ${s*.9})`),d.addColorStop(.6,`rgba(255, 255, 255, ${s*.7})`),d.addColorStop(1,`rgba(240, 240, 250, ${s*.4})`),e.fillStyle=d,e.beginPath(),e.arc(n.x,n.y,n.r,0,Math.PI*2),e.fill()}),e.fillStyle=`rgba(200, 200, 220, ${s*.2})`,e.beginPath(),e.ellipse(o,a+t*.3,t*.7,t*.2,0,0,Math.PI*2),e.fill(),e.restore()}function mt(e){const[o,a,t]=e.split("-").map(Number);return a===12||a===1||a===2?"verão":a===3||a===4||a===5?"outono":a===6||a===7||a===8?"inverno":a===9||a===10||a===11?"primavera":"verão"}function ut(e,o){const a={},t=mt(o);Object.keys(qe).forEach(n=>{const r=qe[n];let d=0,m=0;r.stars.forEach(h=>{const y=e.find(g=>g.name===h);y&&(m++,d+=(2-y.mag)*10)}),m===r.stars.length&&r.stars.length>0&&(d+=50),r.connections.length>0&&(d+=30),r.season===t?d+=100:d*=.3,m>0&&(a[n]={score:d,visibleCount:m,totalStars:r.stars.length,constellation:r})});let s=0,i=null;return Object.keys(a).forEach(n=>{a[n].score>s&&(s=a[n].score,i=n)}),i?{name:i,...a[i]}:null}function $e(e){const[o,a,t]=e.split("-").map(Number);return`${t.toString().padStart(2,"0")}/${a.toString().padStart(2,"0")}/${o}`}const He={"são paulo":{lat:-23.5505,lon:-46.6333,name:"São Paulo, SP, Brasil"},"sao paulo":{lat:-23.5505,lon:-46.6333,name:"São Paulo, SP, Brasil"},"rio de janeiro":{lat:-22.9068,lon:-43.1729,name:"Rio de Janeiro, RJ, Brasil"},rio:{lat:-22.9068,lon:-43.1729,name:"Rio de Janeiro, RJ, Brasil"},"belo horizonte":{lat:-19.9167,lon:-43.9345,name:"Belo Horizonte, MG, Brasil"},brasília:{lat:-15.7942,lon:-47.8822,name:"Brasília, DF, Brasil"},brasilia:{lat:-15.7942,lon:-47.8822,name:"Brasília, DF, Brasil"},salvador:{lat:-12.9714,lon:-38.5014,name:"Salvador, BA, Brasil"},curitiba:{lat:-25.4284,lon:-49.2733,name:"Curitiba, PR, Brasil"},fortaleza:{lat:-3.7172,lon:-38.5433,name:"Fortaleza, CE, Brasil"},recife:{lat:-8.0476,lon:-34.877,name:"Recife, PE, Brasil"},"porto alegre":{lat:-30.0346,lon:-51.2177,name:"Porto Alegre, RS, Brasil"},manaus:{lat:-3.119,lon:-60.0217,name:"Manaus, AM, Brasil"},belém:{lat:-1.4558,lon:-48.5044,name:"Belém, PA, Brasil"},belem:{lat:-1.4558,lon:-48.5044,name:"Belém, PA, Brasil"},goiânia:{lat:-16.6864,lon:-49.2643,name:"Goiânia, GO, Brasil"},goiania:{lat:-16.6864,lon:-49.2643,name:"Goiânia, GO, Brasil"},guarulhos:{lat:-23.4538,lon:-46.5331,name:"Guarulhos, SP, Brasil"},campinas:{lat:-22.9056,lon:-47.0608,name:"Campinas, SP, Brasil"},"são luís":{lat:-2.5387,lon:-44.2825,name:"São Luís, MA, Brasil"},"sao luis":{lat:-2.5387,lon:-44.2825,name:"São Luís, MA, Brasil"},maceió:{lat:-9.5713,lon:-36.782,name:"Maceió, AL, Brasil"},maceio:{lat:-9.5713,lon:-36.782,name:"Maceió, AL, Brasil"},natal:{lat:-5.7945,lon:-35.211,name:"Natal, RN, Brasil"},teresina:{lat:-5.0892,lon:-42.8019,name:"Teresina, PI, Brasil"},aracaju:{lat:-10.9091,lon:-37.0677,name:"Aracaju, SE, Brasil"},florianópolis:{lat:-27.5954,lon:-48.548,name:"Florianópolis, SC, Brasil"},florianopolis:{lat:-27.5954,lon:-48.548,name:"Florianópolis, SC, Brasil"},vitória:{lat:-20.3155,lon:-40.3128,name:"Vitória, ES, Brasil"},vitoria:{lat:-20.3155,lon:-40.3128,name:"Vitória, ES, Brasil"},"joão pessoa":{lat:-7.115,lon:-34.8611,name:"João Pessoa, PB, Brasil"},"joao pessoa":{lat:-7.115,lon:-34.8611,name:"João Pessoa, PB, Brasil"},cuiabá:{lat:-15.6014,lon:-56.0979,name:"Cuiabá, MT, Brasil"},cuiaba:{lat:-15.6014,lon:-56.0979,name:"Cuiabá, MT, Brasil"},"campo grande":{lat:-20.4697,lon:-54.6201,name:"Campo Grande, MS, Brasil"},"porto velho":{lat:-8.7619,lon:-63.9039,name:"Porto Velho, RO, Brasil"},"boa vista":{lat:2.8235,lon:-60.6758,name:"Boa Vista, RR, Brasil"},"rio branco":{lat:-9.9747,lon:-67.81,name:"Rio Branco, AC, Brasil"},macapá:{lat:.0349,lon:-51.0664,name:"Macapá, AP, Brasil"},macapa:{lat:.0349,lon:-51.0664,name:"Macapá, AP, Brasil"},palmas:{lat:-10.1844,lon:-48.3336,name:"Palmas, TO, Brasil"}};async function pt(e){try{const o=document.getElementById("starMapLoading");o&&(o.style.display="block");const a=e.toLowerCase().trim();if(He[a]){const t=He[a];return o&&(o.style.display="none"),{latitude:t.lat,longitude:t.lon,displayName:t.name}}try{const t=`https://api.allorigins.win/get?url=${encodeURIComponent(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(e)}&limit=1`)}`,s=await fetch(t,{method:"GET",headers:{Accept:"application/json"}});if(!s.ok)throw new Error("API não disponível");const i=await s.json(),n=JSON.parse(i.contents);if(o&&(o.style.display="none"),n&&n.length>0)return{latitude:parseFloat(n[0].lat),longitude:parseFloat(n[0].lon),displayName:n[0].display_name}}catch(t){console.warn("API de geocodificação não disponível, usando fallback:",t)}return o&&(o.style.display="none"),console.warn(`Cidade "${e}" não encontrada, usando coordenadas padrão (São Paulo)`),{latitude:-23.5505,longitude:-46.6333,displayName:"São Paulo, SP, Brasil (padrão)"}}catch(o){const a=document.getElementById("starMapLoading");return a&&(a.style.display="none"),console.error("Erro ao buscar coordenadas:",o),{latitude:-23.5505,longitude:-46.6333,displayName:"São Paulo, SP, Brasil (padrão)"}}}let O=null;function Le(){const e=document.getElementById("starMapInfoMobile"),o=document.getElementById("starMapInfoToggle"),a=document.getElementById("starMapInfoCloseBtn");O&&(document.removeEventListener("click",O,!0),O=null),e&&(e.style.transition="transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",e.offsetWidth,e.classList.remove("translate-x-0"),e.classList.add("translate-x-full")),a&&(a.style.transition="opacity 0.3s ease-out",a.style.opacity="0",a.style.pointerEvents="none"),setTimeout(()=>{o&&(o.style.display="block",o.style.opacity="0",setTimeout(()=>{o.style.transition="opacity 0.3s ease-in",o.style.opacity="1"},50))},400)}function ft(){const e=document.getElementById("starMapForm"),o=document.getElementById("starMapFormMobileForm"),a=document.getElementById("starMapToggleBtn"),t=document.getElementById("starMapToggleIcon"),s=document.getElementById("starMapFormMobile"),i=document.getElementById("starMapInfoMobile"),n=document.getElementById("starMapInfoToggle");if(a&&s&&t){let u=!1;a.addEventListener("click",()=>{u=!u,u?(s.classList.remove("scale-0","opacity-0"),s.classList.add("scale-100","opacity-100"),t.style.transition="transform 0.3s ease-in-out",t.textContent="+",setTimeout(()=>{t.style.transform="rotate(45deg)",setTimeout(()=>{t.textContent="×",t.style.transform="rotate(0deg)"},150)},10)):(s.classList.remove("scale-100","opacity-100"),s.classList.add("scale-0","opacity-0"),t.style.transition="transform 0.3s ease-in-out",t.textContent="×",setTimeout(()=>{t.style.transform="rotate(45deg)",setTimeout(()=>{t.textContent="+",t.style.transform="rotate(0deg)"},150)},10))})}n&&i&&n.addEventListener("click",()=>{if(i.classList.contains("translate-x-full")){i.style.transition="transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",i.classList.remove("translate-x-full"),i.classList.add("translate-x-0"),n.style.display="none";const u=document.getElementById("starMapInfoCloseBtn");u&&(u.style.opacity="1",u.style.pointerEvents="auto"),setTimeout(()=>{O&&document.removeEventListener("click",O,!0),O=b=>{var E;if(!i.classList.contains("translate-x-0"))return;const S=b.target,c=i.contains(S),x=(E=document.getElementById("starMapInfoCloseBtn"))==null?void 0:E.contains(S),v=n==null?void 0:n.contains(S);!c&&!x&&!v&&window.innerWidth<768&&(b.stopPropagation(),Le())},document.addEventListener("click",O,!0)},400)}});const r=document.getElementById("starMapDate"),d=document.getElementById("starMapTime"),m=document.getElementById("starMapCity"),h=document.getElementById("starMapUpdateBtn"),y=document.getElementById("starMapLoading");if(document.getElementById("starMapUpdateBtnMobile"),document.getElementById("starMapLoadingMobile"),!e||!r||!d||!m||!h)return;r.addEventListener("click",u=>{var b;u.stopPropagation(),(b=r.showPicker)==null||b.call(r)}),r.addEventListener("focus",()=>{var u;(u=r.showPicker)==null||u.call(r)}),d.addEventListener("click",u=>{var b;u.stopPropagation(),(b=d.showPicker)==null||b.call(d)}),d.addEventListener("focus",()=>{var u;(u=d.showPicker)==null||u.call(d)});const g=async(u,b=!1)=>{u.preventDefault();const E=b?document.getElementById("starMapDateMobile"):null,S=b?document.getElementById("starMapTimeMobile"):null,c=b?document.getElementById("starMapCityMobile"):null,x=b?document.getElementById("starMapUpdateBtnMobile"):null,v=b?document.getElementById("starMapLoadingMobile"):null,M=b?E:r,z=b?S:d,A=b?c:m,k=b?x:h,I=b?v:y;if(!M||!z||!A||!k)return;const F=A.value.trim(),l=M.value,p=z.value;if(b)r&&(r.value=l),d&&(d.value=p),m&&(m.value=F);else{const w=document.getElementById("starMapDateMobile"),P=document.getElementById("starMapTimeMobile"),B=document.getElementById("starMapCityMobile");w&&(w.value=l),P&&(P.value=p),B&&(B.value=F)}if(!F){A.setCustomValidity("Por favor, insira o nome da cidade"),A.reportValidity();return}if(A.setCustomValidity(""),!l){M.setCustomValidity("Por favor, selecione uma data"),M.reportValidity();return}M.setCustomValidity(""),k.disabled=!0,k.setAttribute("aria-busy","true"),I&&(I.classList.remove("hidden"),I.textContent="Buscando coordenadas...");const f=k.querySelector(".star-map-button-icon");f&&(f.textContent="⏳");try{const w=await pt(F);L={date:l,city:F,latitude:w.latitude,longitude:w.longitude,time:p||"20:00"},gt(),setTimeout(()=>{Ye(!0),b&&s&&setTimeout(()=>{s.classList.remove("scale-100","opacity-100"),s.classList.add("scale-0","opacity-0"),t&&(t.textContent="+",t.style.transform="rotate(0deg)")},1e3)},500),R&&clearTimeout(R),R=setTimeout(()=>{yt()},5e3),f&&(f.textContent="✓"),I&&(w.displayName&&w.displayName.includes("padrão")?I.textContent="Cidade não encontrada. Usando coordenadas padrão.":I.textContent="Céu atualizado com sucesso!",I.classList.remove("hidden")),setTimeout(()=>{f&&(f.textContent="✨"),I&&I.classList.add("hidden")},2e3)}catch(w){console.error("Erro ao processar formulário:",w),f&&(f.textContent="⚠️"),I&&(I.textContent="Erro ao processar. Tente novamente.",I.classList.remove("hidden")),setTimeout(()=>{f&&(f.textContent="✨"),I&&I.classList.add("hidden")},3e3)("Erro ao atualizar mapa estelar:",w),f&&(f.textContent="⚠️"),I&&(I.textContent="Erro ao processar. Tente novamente.",I.classList.remove("hidden")),setTimeout(()=>{f&&(f.textContent="✨"),I&&I.classList.add("hidden")},3e3)}finally{k.disabled=!1,k.setAttribute("aria-busy","false")}};e.addEventListener("submit",u=>g(u,!1)),o&&o.addEventListener("submit",u=>g(u,!0))}let R=null,j=null,ee=null,q=null;function gt(){const e=document.getElementById("starMapText"),o=document.getElementById("starMapControls");R&&(clearTimeout(R),R=null),e&&(e.classList.add("opacity-0","-translate-y-5"),e.classList.remove("opacity-100","translate-y-0"),setTimeout(()=>{e.classList.add("hidden")},1e3)),o&&(o.classList.add("opacity-0","translate-y-5"),o.classList.remove("opacity-100","translate-y-0"),setTimeout(()=>{o.classList.add("hidden")},1e3));const a=document.getElementById("starMapCanvas");a&&a.classList.add("star-map-highlighted")}function yt(){const e=document.getElementById("starMapControls");e&&(e.classList.remove("hidden"),e.classList.add("opacity-0","translate-y-5"),e.classList.remove("opacity-100","translate-y-0"),setTimeout(()=>{e.classList.remove("opacity-0","translate-y-5"),e.classList.add("opacity-100","translate-y-0")},50))}function ht(){const e=document.getElementById("starMapText"),o=document.getElementById("starMapControls"),a=document.getElementById("starMapCanvas");R&&(clearTimeout(R),R=null),e&&(e.classList.remove("hidden"),e.classList.add("opacity-0","-translate-y-5"),e.classList.remove("opacity-100","translate-y-0"),setTimeout(()=>{e.classList.remove("opacity-0","-translate-y-5"),e.classList.add("opacity-100","translate-y-0")},50)),o&&(o.classList.remove("hidden"),o.classList.remove("opacity-0","translate-y-5"),o.classList.add("opacity-100","translate-y-0")),a&&a.classList.remove("star-map-highlighted")}async function Ye(e=!1){const o=document.getElementById("starMapCanvas"),a=document.getElementById("starMapInfo");if(!o)return;const t=window.scrollY||window.pageYOffset,s=o.getContext("2d"),i=window.innerWidth,n=window.innerHeight;o.style.position="absolute",o.style.top="0",o.style.left="0",o.style.width="100%",o.style.height="100%",o.style.zIndex="1",o.style.margin="0",o.style.padding="0",o.width=i,o.height=n,s.clearRect(0,0,i,n),requestAnimationFrame(()=>{t!==(window.scrollY||window.pageYOffset)&&window.scrollTo(0,t)});const r=await _e(L.latitude,L.longitude,L.date).catch(()=>Ie(L.latitude,L.date)),d=lt(L.time,r.condition||"Clear"),[m,h]=L.time.split(":").map(Number),y=m+h/60,g=y>=7&&y<15.5,u=y>=15.5&&y<18,b=y>=18&&y<20;if(o&&(o.style.position="absolute",o.style.top="0",o.style.left="0",o.style.width="100%",o.style.height="100%",o.style.zIndex="1"),g||u||b){const l=s.createLinearGradient(0,0,0,n);if(g)r.condition==="Clear"?(l.addColorStop(0,"#87CEEB"),l.addColorStop(.5,"#87CEEB"),l.addColorStop(.8,"#B0D4E6"),l.addColorStop(1,"#C8E0F0")):r.condition==="Clouds"?(l.addColorStop(0,"#B0C4DE"),l.addColorStop(.5,"#B8C8E0"),l.addColorStop(.8,"#C0D0E0"),l.addColorStop(1,"#C8D8E8")):(l.addColorStop(0,"#708090"),l.addColorStop(.5,"#788898"),l.addColorStop(.8,"#8898A8"),l.addColorStop(1,"#98A8B8"));else if(u){const p=(y-15.5)/2.5,f=(w,P,B)=>{const C=w.replace("#",""),T=P.replace("#",""),K=parseInt(C.substr(0,2),16),ne=parseInt(C.substr(2,2),16),ie=parseInt(C.substr(4,2),16),ye=parseInt(T.substr(0,2),16),re=parseInt(T.substr(2,2),16),le=parseInt(T.substr(4,2),16),Y=Math.round(K+(ye-K)*B),he=Math.round(ne+(re-ne)*B),de=Math.round(ie+(le-ie)*B);return`#${Y.toString(16).padStart(2,"0")}${he.toString(16).padStart(2,"0")}${de.toString(16).padStart(2,"0")}`};r.condition==="Clear"?(l.addColorStop(0,f("#87CEEB","#FF8C42",p)),l.addColorStop(.5,f("#B0D4E6","#FF7F50",p)),l.addColorStop(.8,f("#B0D4E6","#FF6347",p)),l.addColorStop(1,f("#C8E0F0","#FF6B6B",p))):r.condition==="Clouds"?(l.addColorStop(0,f("#B0C4DE","#FFA07A",p)),l.addColorStop(.5,f("#B8C8E0","#FF8C69",p)),l.addColorStop(.8,f("#C0D0E0","#A0522D",p)),l.addColorStop(1,f("#C8D8E8","#CD5C5C",p))):(l.addColorStop(0,f("#708090","#D2691E",p)),l.addColorStop(.5,f("#788898","#CD853F",p)),l.addColorStop(.8,f("#8898A8","#8B4513",p)),l.addColorStop(1,f("#98A8B8","#A0522D",p)))}else b&&(r.condition==="Clear"?(l.addColorStop(0,"#FF8C42"),l.addColorStop(.2,"#FF7F50"),l.addColorStop(.4,"#FF6B6B"),l.addColorStop(.6,"#FF6347"),l.addColorStop(.75,"#FF4500"),l.addColorStop(.85,"#DC143C"),l.addColorStop(.95,"#8B0000"),l.addColorStop(1,"#6B0000")):r.condition==="Clouds"?(l.addColorStop(0,"#FFA07A"),l.addColorStop(.3,"#FF8C69"),l.addColorStop(.5,"#CD5C5C"),l.addColorStop(.7,"#A0522D"),l.addColorStop(.85,"#8B4513"),l.addColorStop(1,"#654321")):(l.addColorStop(0,"#D2691E"),l.addColorStop(.3,"#CD853F"),l.addColorStop(.5,"#A0522D"),l.addColorStop(.7,"#8B4513"),l.addColorStop(.85,"#654321"),l.addColorStop(1,"#4B2C1A")));s.fillStyle=l,s.fillRect(0,0,i,n)}else{s.fillStyle=d.base,s.fillRect(0,0,i,n);const l=s.createRadialGradient(i/2,n/2,0,i/2,n/2,Math.max(i,n));d.gradient.forEach(({stop:p,color:f})=>{l.addColorStop(p,f)}),s.fillStyle=l,s.fillRect(0,0,i,n)}const E=document.querySelector(".star-map-overlay");if(E&&(g?E.classList.remove("night-mode"):E.classList.add("night-mode")),y>=7&&y<18&&r.condition==="Clear"&&dt(s,i,n,y),y>=7&&y<20&&r.condition==="Rain"&&Ee(s,i,n),y>=7&&y<20){let l=function(){if(ee&&q){const[p,f]=L.time.split(":").map(Number),w=p+f/60;q.hour=w,q.isDay=w>=7&&w<18,q.isDusk=w>=18&&w<20,Re(ee,q.width,q.height,q.weatherCondition,!0),q.weatherCondition==="Rain"&&Ee(ee,q.width,q.height),j=requestAnimationFrame(l)}};j&&cancelAnimationFrame(j),me=Date.now(),ee=s,q={width:i,height:n,condition:r.condition||"Clear",isDay:!0,weatherCondition:r.condition||"Clear"},Re(s,i,n,r.condition||"Clear",!1),r.condition==="Rain"&&Ee(s,i,n),j=requestAnimationFrame(l)}else j&&(cancelAnimationFrame(j),j=null),ee=null,q=null;function S(l,p,f,w,P){const B=f*Math.PI/180,C=p*Math.PI/180,[T,K,ne]=L.date.split("-").map(Number),[ie,ye]=L.time.split(":").map(Number),re=ie+ye/60,le=Math.floor((14-K)/12),Y=T+4800-le,he=K+12*le-3;let de=ne+Math.floor((153*he+2)/5)+365*Y+Math.floor(Y/4)-Math.floor(Y/100)+Math.floor(Y/400)-32045;de+=re/24-.5;let H=(18.697374558+24.06570982441908*(de-2451545))%24;H<0&&(H+=24),H=(H+re*1.00273790935)%24,H<0&&(H+=24);let ve=(H+w/15)%24;ve<0&&(ve+=24);let U=(ve-l/15)*Math.PI/12;for(;U>Math.PI;)U-=2*Math.PI;for(;U<-Math.PI;)U+=2*Math.PI;const Qe=Math.sin(B)*Math.sin(C)+Math.cos(B)*Math.cos(C)*Math.cos(U),X=Math.asin(Math.max(-1,Math.min(1,Qe)));if(X<=0)return{x:0,y:0,visible:!1};const Ke=(Math.sin(C)-Math.sin(B)*Math.sin(X))/(Math.cos(B)*Math.cos(X));let ce=Math.acos(Math.max(-1,Math.min(1,Ke)));Math.sin(U)>0&&(ce=2*Math.PI-ce);const ze=(Math.PI/2-X)/(Math.PI/2)*Math.min(i,n)/2,be=i/2+ze*Math.sin(ce),xe=n/2-ze*Math.cos(ce);return{x:be,y:xe,visible:X>0&&be>=0&&be<=i&&xe>=0&&xe<=n}}const c=[];rt.forEach(l=>{const p=S(l.ra,l.dec,L.latitude,L.longitude,L.date);p.visible&&p.x>=0&&p.x<=i&&p.y>=0&&p.y<=n&&c.push({...l,...p})}),c.sort((l,p)=>l.mag-p.mag);const x=ut(c,L.date);if(c.length>0){const l=c.reduce((C,T)=>C+T.x,0),p=c.reduce((C,T)=>C+T.y,0),f=l/c.length,w=p/c.length,P=i/2-f,B=n/2-w;c.forEach(C=>{C.x+=P,C.y+=B})}const v=e?2.5:1,M=e?1.4:.7,z=e?5:3,A=e?30:50,k=d.starsVisible||e||!g&&!b;k&&c.forEach((l,p)=>{setTimeout(()=>{const f=Math.max(1,3-l.mag/2)*v,w=Math.max(.3,1-(l.mag+1)/5),P=Math.min(.8,w*M),B=s.createRadialGradient(l.x,l.y,0,l.x,l.y,f*z);e?(B.addColorStop(0,`rgba(255, 255, 255, ${P*.5})`),B.addColorStop(.5,`rgba(255, 255, 255, ${P*.2})`),B.addColorStop(1,"rgba(255, 255, 255, 0)")):(B.addColorStop(0,`rgba(255, 255, 255, ${P*.3})`),B.addColorStop(1,"rgba(255, 255, 255, 0)")),s.fillStyle=B,s.beginPath(),s.arc(l.x,l.y,f*z,0,Math.PI*2),s.fill(),s.fillStyle=`rgba(255, 255, 255, ${P*.8})`,s.beginPath(),s.arc(l.x,l.y,f,0,Math.PI*2),s.fill(),e&&(s.fillStyle=`rgba(255, 255, 255, ${Math.min(.9,P*1.2)})`,s.beginPath(),s.arc(l.x,l.y,f*.5,0,Math.PI*2),s.fill())},p*A)});const I=e&&k?300:k?200:0,F=c.length*A;for(let l=0;l<I;l++)setTimeout(()=>{const p=Math.random()*i,f=Math.random()*n,w=Math.random()*.4,P=e?w*1.2:w*.8,B=Math.random()*1.5,C=e?B*1.3:B;if(s.fillStyle=`rgba(255, 255, 255, ${Math.min(.6,P)})`,s.beginPath(),s.arc(p,f,C,0,Math.PI*2),s.fill(),e&&P>.2){const T=s.createRadialGradient(p,f,0,p,f,C*2);T.addColorStop(0,`rgba(255, 255, 255, ${P*.2})`),T.addColorStop(1,"rgba(255, 255, 255, 0)"),s.fillStyle=T,s.beginPath(),s.arc(p,f,C*2,0,Math.PI*2),s.fill()}},F+l*8);if(a&&e)a.classList.remove("hidden"),_e(L.latitude,L.longitude,L.date).then(l=>{setTimeout(()=>{let p=`
          <div style="background: rgba(0, 0, 0, 0.4); backdrop-filter: blur(12px); border-radius: 1rem; padding: 2.5rem; border: 1px solid rgba(255, 255, 255, 0.1); box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5); line-height: 1.8;">
            <p style="color: white; font-size: 1.125rem; font-weight: 600; margin-bottom: 1.5rem; text-shadow: 2px 2px 10px rgba(0,0,0,0.5);">
              ${L.city}
            </p>
            <p style="color: rgba(255, 255, 255, 0.9); font-size: 0.875rem; margin-bottom: 1.5rem;">
              ${$e(L.date)} • ${L.time}
            </p>
            <p style="color: rgba(255, 255, 255, 0.9); font-size: 0.875rem; margin-bottom: 1.5rem; font-weight: 500;">
              🌡️ ${l.temperature}°C • ${l.description}
            </p>
        `;x&&(p+=`
            <div style="border-top: 1px solid rgba(255, 255, 255, 0.2); padding-top: 1.5rem;">
              <p style="color: #ffd700; font-size: 1rem; font-weight: 700; margin-bottom: 1.25rem; text-shadow: 0 0 10px rgba(255,215,0,0.3);">
                ⭐ ${x.name}
              </p>
              <p style="color: rgba(255, 255, 255, 0.8); font-size: 0.875rem; line-height: 1.75; font-style: italic;">
                ${x.constellation.meaning}
              </p>
            </div>
          `),p+="</div>",a&&(a.innerHTML=p,a.style.opacity="0",a.style.transition="opacity 1s ease-in",setTimeout(()=>{a.style.opacity="1"},100));const f=document.getElementById("starMapInfoMobileContent"),w=document.getElementById("starMapInfoMobile"),P=document.getElementById("starMapInfoToggle");if(f&&w){const B=p.replace(/font-size:\s*1\.125rem/g,"font-size: 1rem").replace(/font-size:\s*0\.875rem/g,"font-size: 0.8125rem").replace(/padding:\s*2\.5rem/g,"padding: 2rem").replace(/margin-bottom:\s*1\.5rem/g,"margin-bottom: 1.25rem").replace(/margin-bottom:\s*1\.25rem/g,"margin-bottom: 1rem");if(f.innerHTML=B,P&&window.innerWidth<768){const T=document.getElementById("starMapInfoToggleIcon");P.style.display="block",T&&(T.textContent="←",T.classList.add("animate-pulse"))}const C=document.getElementById("starMapInfoCloseBtn");if(C){const T=C.cloneNode(!0);C.parentNode.replaceChild(T,C),T.addEventListener("click",Le),T.style.opacity="1",T.style.pointerEvents="auto"}}},1e3)}).catch(()=>{setTimeout(()=>{let l=`
          <div style="background: rgba(0, 0, 0, 0.4); backdrop-filter: blur(12px); border-radius: 1rem; padding: 2.5rem; border: 1px solid rgba(255, 255, 255, 0.1); box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5); line-height: 1.8;">
            <p style="color: white; font-size: 1.125rem; font-weight: 600; margin-bottom: 1.5rem; text-shadow: 2px 2px 10px rgba(0,0,0,0.5);">
              ${L.city}
            </p>
            <p style="color: rgba(255, 255, 255, 0.9); font-size: 0.875rem; margin-bottom: 1.5rem;">
              ${$e(L.date)} • ${L.time}
            </p>
        `;x&&(l+=`
            <div style="border-top: 1px solid rgba(255, 255, 255, 0.2); padding-top: 1.5rem;">
              <p style="color: #ffd700; font-size: 1rem; font-weight: 700; margin-bottom: 1.25rem; text-shadow: 0 0 10px rgba(255,215,0,0.3);">
                ⭐ ${x.name}
              </p>
              <p style="color: rgba(255, 255, 255, 0.8); font-size: 0.875rem; line-height: 1.75; font-style: italic;">
                ${x.constellation.meaning}
              </p>
            </div>
          `),l+="</div>",a&&(a.innerHTML=l,a.style.opacity="0",a.style.transition="opacity 1s ease-in",setTimeout(()=>{a.style.opacity="1"},100));const p=document.getElementById("starMapInfoMobileContent"),f=document.getElementById("starMapInfoMobile"),w=document.getElementById("starMapInfoToggle");if(p&&f){const P=l.replace(/font-size:\s*1\.125rem/g,"font-size: 1rem").replace(/font-size:\s*0\.875rem/g,"font-size: 0.8125rem").replace(/padding:\s*2\.5rem/g,"padding: 2rem").replace(/margin-bottom:\s*1\.5rem/g,"margin-bottom: 1.25rem").replace(/margin-bottom:\s*1\.25rem/g,"margin-bottom: 1rem");if(p.innerHTML=P,w&&window.innerWidth<768){const C=document.getElementById("starMapInfoToggleIcon");w.style.display="block",C&&(C.textContent="←",C.classList.add("animate-pulse"))}const B=document.getElementById("starMapInfoCloseBtn");if(B){const C=B.cloneNode(!0);B.parentNode.replaceChild(C,B),C.addEventListener("click",Le),C.style.opacity="1",C.style.pointerEvents="auto"}}},1e3)});else if(a&&!e){a&&(a.innerHTML="",a.style.opacity="0",a.classList.add("hidden"));const l=document.getElementById("starMapInfoMobileContent"),p=document.getElementById("starMapInfoMobile"),f=document.getElementById("starMapInfoToggle");l&&(l.innerHTML=""),p&&(p.style.transition="transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",p.classList.remove("translate-x-0"),p.classList.add("translate-x-full")),f&&(f.style.display="none")}}let se=!1,Q=0,N=219,W=null,je=!1;const V={coverUrl:Xe,audioUrl:Ze,songTitle:"Lisboa",artistName:"ANAVITÓRIA",duration:219};function vt(){const e=document.getElementById("musicIntroText"),o=document.getElementById("musicPlayerContainer"),a=document.getElementById("musicAudioPlayer");e&&(e.style.opacity="0",e.style.transition="none"),o&&(o.style.opacity="0",o.style.transform="translateY(32px)",o.style.transition="none"),e==null||e.offsetWidth,o==null||o.offsetWidth,bt(),je||(Ct(),je=!0),wt(),setTimeout(()=>{!se&&a&&Bt()},400),e&&setTimeout(()=>{e.style.opacity="1",e.style.transition="opacity 1s ease-in"},100),setTimeout(()=>{e&&(e.style.opacity="0",e.style.transition="opacity 1s ease-out"),setTimeout(()=>{o&&(o.style.opacity="1",o.style.transform="translateY(0)",o.style.transition="opacity 1.5s ease-in, transform 1.5s ease-out"),setTimeout(()=>{const t=document.getElementById("playPauseBtn");if(t){const s=t.cloneNode(!0);t.parentNode.replaceChild(s,t),s.addEventListener("click",i=>{i.preventDefault(),i.stopPropagation(),ue()},!0)}},100),Te()},1e3)},3e3)}function bt(){const e=document.getElementById("albumCoverImg"),o=document.getElementById("musicSlideBg");e&&(e.src=V.coverUrl,e.style.display="block",e.onload=()=>{xt(e,o)},e.onerror=()=>{console.warn("Erro ao carregar capa do álbum local."),o&&(o.style.background="linear-gradient(to bottom, rgba(29, 185, 84, 0.2), rgba(0, 0, 0, 0.8))")})}function xt(e,o){const a=document.createElement("canvas"),t=a.getContext("2d");a.width=e.naturalWidth||100,a.height=e.naturalHeight||100;try{t.drawImage(e,0,0);const s=t.getImageData(0,0,10,10).data,i=t.getImageData(a.width-10,a.height-10,10,10).data,n=g=>{let u=0,b=0,E=0;for(let c=0;c<g.length;c+=4)u+=g[c],b+=g[c+1],E+=g[c+2];const S=g.length/4;return{r:Math.floor(u/S),g:Math.floor(b/S),b:Math.floor(E/S)}},r=n(s),d=n(i),m=(g,u=.3)=>({r:Math.floor(g.r*u),g:Math.floor(g.g*u),b:Math.floor(g.b*u)}),h=m(r,.2),y=m(d,.4);o&&(o.style.background=`linear-gradient(to bottom, 
        rgb(${h.r}, ${h.g}, ${h.b}), 
        rgb(${y.r}, ${y.g}, ${y.b}))`)}catch{o&&(o.style.background="linear-gradient(to bottom, rgba(29, 185, 84, 0.2), rgba(0, 0, 0, 0.8))")}}function wt(){const e=document.getElementById("songTitle"),o=document.getElementById("artistName"),a=document.getElementById("musicAudioPlayer");if(e&&(e.textContent=V.songTitle),o&&(o.textContent=V.artistName),a&&V.audioUrl){const t=document.getElementById("audioSource");t&&t.src!==V.audioUrl&&(t.src=V.audioUrl,a.load());const s=()=>{if(a.duration&&!isNaN(a.duration)){N=Math.floor(a.duration);const i=document.getElementById("totalTime");i&&(i.textContent=pe(N))}};a.addEventListener("loadedmetadata",s,{once:!0}),a.readyState>=1&&s()}else{N=V.duration;const t=document.getElementById("totalTime");t&&(t.textContent=pe(N))}}function Ct(){const e=document.getElementById("playPauseBtn"),o=document.getElementById("prevBtn"),a=document.getElementById("nextBtn"),t=document.getElementById("shuffleBtn"),s=document.getElementById("repeatBtn");document.getElementById("volumeBtn");const i=document.getElementById("shareBtn"),n=document.getElementById("addToPlaylistBtn"),r=document.querySelector(".progress-bar-wrapper"),d=document.getElementById("musicPlayerContainer");d&&d.addEventListener("click",v=>{v.target.closest("#playPauseBtn")&&(v.preventDefault(),v.stopPropagation(),ue())}),e&&e.addEventListener("click",v=>{v.preventDefault(),v.stopPropagation(),ue()},{capture:!0}),o&&o.addEventListener("click",()=>{o.style.transform="scale(0.9)",setTimeout(()=>{o.style.transform="scale(1)"},150)}),a&&a.addEventListener("click",()=>{a.style.transform="scale(0.9)",setTimeout(()=>{a.style.transform="scale(1)"},150)}),t&&t.addEventListener("click",()=>{t.classList.toggle("active")}),s&&s.addEventListener("click",()=>{s.classList.toggle("active")});const m=document.getElementById("volumeBarWrapper"),h=document.getElementById("volumeBarFill"),y=document.getElementById("volumeBarHandle"),g=document.getElementById("musicAudioPlayer");let u=!1;function b(v){const M=v*100;h&&(h.style.width=M+"%"),y&&(y.style.left=M+"%")}function E(v){g&&(window.userControlledVolume=!0,g.volume=Math.max(0,Math.min(1,v)),b(g.volume))}m&&g&&(b(.25),m.addEventListener("click",v=>{const M=m.getBoundingClientRect(),z=v.clientX-M.left,A=Math.max(0,Math.min(100,z/M.width*100));E(A/100)}),y.addEventListener("mousedown",v=>{u=!0,v.preventDefault()}),y.addEventListener("touchstart",v=>{u=!0,v.preventDefault()}),document.addEventListener("mousemove",v=>{if(u&&m){const M=m.getBoundingClientRect(),z=v.clientX-M.left,A=Math.max(0,Math.min(100,z/M.width*100));E(A/100)}}),document.addEventListener("touchmove",v=>{if(u&&m){const M=m.getBoundingClientRect(),z=v.touches[0].clientX-M.left,A=Math.max(0,Math.min(100,z/M.width*100));E(A/100)}}),document.addEventListener("mouseup",()=>{u=!1}),document.addEventListener("touchend",()=>{u=!1})),i&&i.addEventListener("click",()=>{window.open("https://open.spotify.com/playlist/37i9dQZF1EJLL3t8wr9SrQ?si=d50ba8d0446c4ee7","_blank")}),n&&n.addEventListener("click",()=>{window.open("https://open.spotify.com/playlist/37i9dQZF1EJLL3t8wr9SrQ?si=d50ba8d0446c4ee7","_blank")}),r&&r.addEventListener("click",v=>{const M=r.getBoundingClientRect(),z=(v.clientX-M.left)/M.width*100;Mt(z)});const S=document.getElementById("libraryBtn"),c=document.getElementById("likeBtn"),x=document.getElementById("queueBtn");S&&S.addEventListener("click",()=>{window.open("https://open.spotify.com/playlist/37i9dQZF1EJLL3t8wr9SrQ?si=d50ba8d0446c4ee7","_blank")}),c&&c.addEventListener("click",()=>{c.classList.toggle("active")}),x&&x.addEventListener("click",()=>{x.style.transform="scale(0.9)",setTimeout(()=>{x.style.transform="scale(1)"},150)})}function Bt(){const e=document.getElementById("musicAudioPlayer"),o=document.getElementById("playPauseBtn"),a=o==null?void 0:o.querySelector(".play-icon"),t=o==null?void 0:o.querySelector(".pause-icon");if(!e){console.error("Elemento de áudio não encontrado");return}e.volume=0,e.play().then(()=>{se=!0,a&&a.classList.add("hidden"),t&&t.classList.remove("hidden");const s=2e3,i=50,n=.25,r=n/i,d=s/i;let m=0;const h=setInterval(()=>{const y=window.userControlledVolume===!0;if(y){clearInterval(h);return}m++;const g=Math.min(r*m,n);e.volume=g;const u=document.getElementById("volumeBarFill"),b=document.getElementById("volumeBarHandle");if(u&&b){const E=g*100;u.style.width=E+"%",b.style.left=E+"%"}if(m>=i&&(clearInterval(h),!y)){e.volume=n;const E=document.getElementById("volumeBarFill"),S=document.getElementById("volumeBarHandle");E&&S&&(E.style.width="25%",S.style.left="25%")}},d);Ue()}).catch(s=>{console.error("Erro ao reproduzir áudio:",s)})}function ue(){const e=document.getElementById("playPauseBtn"),o=e==null?void 0:e.querySelector(".play-icon"),a=e==null?void 0:e.querySelector(".pause-icon"),t=document.getElementById("musicAudioPlayer");if(!t){console.error("Elemento de áudio não encontrado");return}if(t.paused||t.ended){const s=t.play();s!==void 0&&s.then(()=>{se=!0,o&&o.classList.add("hidden"),a&&a.classList.remove("hidden"),Ue()}).catch(i=>{console.error("Erro ao reproduzir áudio:",i)})}else t.pause(),se=!1,o&&o.classList.remove("hidden"),a&&a.classList.add("hidden"),Ge()}function Ue(){const e=document.getElementById("musicAudioPlayer");e&&(W&&clearInterval(W),W=setInterval(()=>{if(e&&!e.paused){if(Q=Math.floor(e.currentTime),Q>=N||e.ended){const o=document.getElementById("repeatBtn");o!=null&&o.classList.contains("active")?(e.currentTime=0,e.play()):ue()}Te()}},100))}function Ge(){W&&(clearInterval(W),W=null)}function Mt(e){const o=document.getElementById("musicAudioPlayer");if(o){const a=e/100*N;o.currentTime=a,Q=Math.floor(a)}else Q=e/100*N;Te()}function Te(){const e=document.querySelector(".progress-bar-fill"),o=document.querySelector(".progress-bar-handle"),a=document.getElementById("currentTime"),t=document.getElementById("totalTime"),s=Q/N*100;e&&(e.style.width=`${s}%`),o&&(o.style.left=`${s}%`),a&&(a.textContent=pe(Q)),t&&(t.textContent=pe(N))}function pe(e){const o=Math.floor(e/60),a=Math.floor(e%60);return`${o}:${a.toString().padStart(2,"0")}`}let te=0,oe=[];const Ae=["Amo seu sorriso, que ilumina qualquer lugar onde você está.","Amo a forma como você me faz sentir especial todos os dias.","Amo sua inteligência e a forma como você vê o mundo.","Amo sua gentileza e como você trata as pessoas ao seu redor.","Amo seus olhos, que conseguem me transmitir tanto sem dizer uma palavra.","Amo sua risada, que é a coisa mais linda que já ouvi.","Amo sua determinação e como você nunca desiste dos seus sonhos.","Amo a forma como você me entende sem eu precisar falar.","Amo sua paixão pela vida e como você me inspira a ser melhor.","Amo simplesmente você ser você, exatamente como é.","Amo como você me faz rir mesmo nos dias mais difíceis.","Amo sua sensibilidade e como você se importa com os detalhes.","Amo a conexão que temos, como se já nos conhecêssemos há anos.","Amo como você me faz sentir em casa, não importa onde estejamos.","Amo cada momento que passo ao seu lado, por mais simples que seja.","Amo sua voz, que acalma minha alma nos momentos mais difíceis.","Amo sua coragem para enfrentar os desafios da vida.","Amo como você me abraça, como se fosse o lugar mais seguro do mundo.","Amo sua honestidade e transparência em tudo que faz.","Amo sua criatividade e como você vê beleza nas coisas simples.","Amo sua paciência comigo, mesmo quando eu sou difícil.","Amo como você me escuta, realmente escuta, quando eu preciso desabafar.","Amo sua generosidade e como você sempre pensa nos outros.","Amo sua força, mesmo quando você acha que não tem.","Amo sua vulnerabilidade, quando você me permite ver quem realmente é.","Amo como você me surpreende com pequenos gestos de carinho.","Amo como você me faz querer ser uma pessoa melhor.","Amo sua lealdade e como posso confiar em você completamente.","Amo sua espontaneidade e como você torna a vida mais divertida.","Amo como você me faz sentir amado de uma forma que nunca senti antes.","Amo sua presença, que transforma qualquer lugar em um lugar especial.","Amo sua forma de me olhar, como se eu fosse a pessoa mais importante do mundo.","Amo sua forma de me tocar, com uma gentileza que me deixa ainda mais louco por você.","Amo como você me faz rir até doer a barriga.","Amo sua forma de me apoiar, mesmo quando meus sonhos parecem impossíveis.","Amo como você me faz sentir que tudo vai ficar bem.","Amo sua forma de me fazer sentir único e especial.","Amo como você me ensina coisas novas todos os dias.","Amo sua forma de me fazer esquecer todos os problemas do mundo.","Amo como você me faz sentir que finalmente encontrei minha pessoa.","Amo sua forma de me fazer sentir que sou suficiente, exatamente como sou.","Amo como você me faz querer construir um futuro ao seu lado.","Amo como você me faz sentir que o amor verdadeiro realmente existe.","Amo simplesmente tudo em você, cada detalhe, cada momento, cada respiração."];function We(e){const o=[...e];for(let a=o.length-1;a>0;a--){const t=Math.floor(Math.random()*(a+1));[o[a],o[t]]=[o[t],o[a]]}return o}console.log(`Total de mensagens de amor: ${Ae.length}`);function Et(){const e=document.getElementById("promisesContainer");e&&(e.innerHTML="",[{icon:"💍",title:"Sempre te fazer rir",text:"Prometo que todos os dias vou tentar te fazer sorrir, mesmo nos momentos mais difíceis."},{icon:"🌍",title:"Viajar o mundo juntos",text:"Sonho em conhecer lugares incríveis ao seu lado e criar memórias inesquecíveis."},{icon:"🌅",title:"Ver muitos pores do sol",text:"Quero passar tardes inteiras ao seu lado, admirando a beleza do mundo."},{icon:"💝",title:"Te surpreender sempre",text:"Prometo nunca deixar a rotina apagar a magia entre nós."},{icon:"🏠",title:"Construir um lar",text:"Sonho em criar um lugar nosso, cheio de amor e memórias especiais."},{icon:"⭐",title:"Apoiar seus sonhos",text:"Estarei sempre ao seu lado para te apoiar em todos os seus projetos."}].forEach((o,a)=>{const t=document.createElement("div");t.className="promise-card opacity-0 transform translate-y-8",t.style.transition="opacity 0.8s ease-out, transform 0.8s ease-out",t.style.transitionDelay=`${a*.2}s`,t.innerHTML=`
      <div class="promise-icon text-5xl md:text-6xl mb-4">${o.icon}</div>
      <h3 class="promise-title font-['Playfair_Display'] text-[clamp(1.5rem,3vw,2rem)] font-bold text-white mb-3 [text-shadow:1px_1px_10px_rgba(0,0,0,0.3)]">${o.title}</h3>
      <p class="promise-text text-[clamp(1rem,2vw,1.25rem)] text-white/90 leading-relaxed">${o.text}</p>
    `,e.appendChild(t),setTimeout(()=>{t.style.opacity="1",t.style.transform="translateY(0)"},100+a*200)}))}function St(){const e=document.getElementById("loveReasonText"),o=document.getElementById("nextReasonBtn");if(!e||!o)return;const a=o.cloneNode(!0);o.parentNode.replaceChild(a,o),oe=We(Ae),te=0,e.textContent=oe[0],e.style.opacity="0",e.style.transform="translateY(20px)",e.style.transition="opacity 0.6s ease-in, transform 0.6s ease-out",setTimeout(()=>{e.style.opacity="1",e.style.transform="translateY(0)"},300);const t=document.getElementById("nextReasonBtn");t&&t.addEventListener("click",It)}function It(){const e=document.getElementById("loveReasonText");e&&(e.style.opacity="0",e.style.transform="translateY(-20px)",setTimeout(()=>{te=(te+1)%oe.length,te===0&&(oe=We(Ae)),e.textContent=oe[te],e.style.transform="translateY(20px)",setTimeout(()=>{e.style.opacity="1",e.style.transform="translateY(0)"},50)},300))}function Lt(){const e=new Date("2025-06-25"),o=new Date;e.setHours(0,0,0,0),o.setHours(0,0,0,0);const a=o-e;return Math.floor(a/(1e3*60*60*24))}function Pt(){const e=document.getElementById("daysNumber"),o=document.getElementById("daysHeartContainer"),a=document.querySelector(".heart-path"),t=document.querySelector(".heart-svg");if(!e||!o){console.error("Elementos do slide de dias juntos não encontrados");return}o.style.opacity="0",o.style.transform="scale(0.5)",o.style.transition="none",a&&(a.style.transform="scale(0)",a.style.transition="none"),o.offsetWidth,setTimeout(()=>{o.style.transition="opacity 1s ease-out, transform 1s cubic-bezier(0.34, 1.56, 0.64, 1)",o.style.opacity="1",o.style.transform="scale(1)",a&&(a.style.transition="transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)",a.style.transform="scale(1)");const s=Lt();s>=0?Tt(e,0,s,2e3):e.textContent="0"},300),t&&setTimeout(()=>{t.style.animation="heartPulse 2s ease-in-out infinite"},1500)}function Tt(e,o,a,t){const s=performance.now(),i=a-o;function n(r){const d=r-s,m=Math.min(d/t,1),h=1-Math.pow(1-m,3),y=Math.floor(o+i*h);e.textContent=y,m<1?requestAnimationFrame(n):e.textContent=a}requestAnimationFrame(n)}let D=null,Pe=!1;window.showProposal=function(){const e=document.getElementById("proposalButtonContainer"),o=document.getElementById("proposalQuestionContainer"),a=document.getElementById("pulsingHeart");if(!e||!o){console.error("Elementos não encontrados");return}e.style.opacity="0",e.style.transition="opacity 0.5s ease-out",e.style.pointerEvents="none",setTimeout(()=>{o.style.opacity="1",o.style.pointerEvents="auto",o.style.transition="opacity 0.8s ease-in",a&&a.classList.add("pulse-animation"),qt()},500)};window.handleYesProposal=function(){zt();const e=document.getElementById("proposalYesBtn");if(e&&(e.style.transform="scale(1.2)",setTimeout(()=>{e.style.transform="scale(1)"},300)),!Pe){Pe=!0;const o=document.getElementById("proposalNoBtn");o&&(o.style.opacity="0",o.style.pointerEvents="none",o.style.transition="opacity 0.5s ease-out")}};window.handleNoProposal=function(){const e=document.getElementById("proposalNoBtn");if(!e||!document.querySelector('[data-slide="8"]'))return;if(!D){const c=e.getBoundingClientRect(),x=window.getComputedStyle(e),v=e.querySelector("span"),M=v?window.getComputedStyle(v):null;D={width:c.width,height:c.height,fontSize:parseFloat(x.fontSize)||18,paddingTop:parseFloat(x.paddingTop)||20,paddingRight:parseFloat(x.paddingRight)||40,paddingBottom:parseFloat(x.paddingBottom)||20,paddingLeft:parseFloat(x.paddingLeft)||40,spanPaddingX:M&&parseFloat(M.paddingLeft)||8,spanPaddingY:M&&parseFloat(M.paddingTop)||4,borderRadius:x.borderRadius||"9999px"}}const o=document.getElementById("proposalButtons");o&&e.parentNode===o&&(e.style.position="fixed",document.body.appendChild(e));const a=window.innerWidth,t=window.innerHeight,s=.5+Math.random()*.5,i=D.width*s,n=D.height*s;e.style.width=i+"px",e.style.height=n+"px",e.style.minWidth="auto",e.style.minHeight="auto",e.style.display="flex",e.style.alignItems="center",e.style.justifyContent="center",e.style.textAlign="center";const r=Math.min(i,n),d=.1+Math.random()*.4,m=r*d;e.style.borderRadius=m+"px";const h=.15+Math.random()*.85;e.style.opacity=h.toString(),e.style.fontSize=D.fontSize*s+"px",e.style.paddingTop=D.paddingTop*s+"px",e.style.paddingRight=D.paddingRight*s+"px",e.style.paddingBottom=D.paddingBottom*s+"px",e.style.paddingLeft=D.paddingLeft*s+"px";const y=e.querySelector("span");y&&(y.style.padding=`${D.spanPaddingY*s}px ${D.spanPaddingX*s}px`);const g=20,u=g,b=Math.max(g,a-i-g),E=g,S=Math.max(g,t-n-g);if(b>u&&S>E){const c=Math.random()*(b-u)+u,x=Math.random()*(S-E)+E;e.style.left=c+"px",e.style.top=x+"px",e.style.right="auto",e.style.bottom="auto",e.style.transform="none"}else e.style.left="50%",e.style.top="50%",e.style.right="auto",e.style.bottom="auto",e.style.transform="translate(-50%, -50%)";e.style.transition="all 0.3s ease-out",e.style.zIndex="1000",e.style.pointerEvents="auto",setTimeout(()=>{e.style.left==="50%"&&e.style.top==="50%"?(e.style.transform="translate(-50%, -50%) scale(0.95)",setTimeout(()=>{e.style.transform="translate(-50%, -50%)"},150)):(e.style.transform="scale(0.95)",setTimeout(()=>{e.style.transform="none"},150))},10)};function At(){const e=document.getElementById("proposalButtonContainer"),o=document.getElementById("proposalQuestionContainer"),a=document.getElementById("proposalNoBtn");if(e&&(e.style.opacity="1",e.style.pointerEvents="auto"),o&&(o.style.opacity="0",o.style.pointerEvents="none"),D=null,Pe=!1,a){a.style.position="static",a.style.transform="none",a.style.left="auto",a.style.top="auto",a.style.right="auto",a.style.bottom="auto",a.style.zIndex="auto",a.style.width="auto",a.style.height="auto",a.style.fontSize="",a.style.padding="",a.style.transform="none",a.style.transformOrigin="",a.style.display="",a.style.alignItems="",a.style.justifyContent="",a.style.textAlign="",a.style.borderRadius="",a.style.opacity="",a.style.pointerEvents="";const t=a.querySelector("span");t&&(t.style.padding="");const s=document.getElementById("proposalButtons");s&&(a.parentNode===document.body||a.parentNode!==s)&&s.appendChild(a)}}function zt(){const e=document.getElementById("fireworksContainer");if(!e)return;const o=["💖","💕","💗","💝","💞","💓","💘","💟","❤️","🧡","💛","💚","💙","💜","🖤","🤍","🤎","🎁","🎀","🎂","🍰","🌹","🌷","🌺","🌸","💐","🌻","🎉","🎊","✨","⭐","🌟","💫","🎈","🎆","🎇","🏆"],a=50;for(let t=0;t<a;t++){const s=document.createElement("div");s.textContent=o[Math.floor(Math.random()*o.length)],s.style.position="absolute",s.style.fontSize="2rem",s.style.left="50%",s.style.top="50%",s.style.pointerEvents="none",s.style.zIndex="9999";const i=Math.PI*2*t/a,n=200+Math.random()*100,r=1.5+Math.random()*.5;s.style.transform="translate(-50%, -50%)",s.style.transition=`all ${r}s ease-out`,e.appendChild(s),setTimeout(()=>{const d=Math.cos(i)*n,m=Math.sin(i)*n;s.style.transform=`translate(calc(-50% + ${d}px), calc(-50% + ${m}px))`,s.style.opacity="0"},10),setTimeout(()=>{s.remove()},r*1e3+100)}}function kt(){Oe(0)}function qt(){const e=["#ff6b9d","#c44569","#ffd93d","#ff6b9d","#f8b500"];for(let o=0;o<50;o++){const a=document.createElement("div");a.className="light-confetti",a.style.position="fixed",a.style.width="8px",a.style.height="8px",a.style.left=Math.random()*100+"%",a.style.top="-10px",a.style.backgroundColor=e[Math.floor(Math.random()*e.length)],a.style.borderRadius="50%",a.style.pointerEvents="none",a.style.zIndex="9999",a.style.animation=`lightConfettiFall ${2+Math.random()*2}s linear forwards`,a.style.animationDelay=Math.random()*.3+"s",document.body.appendChild(a),setTimeout(()=>{a.remove()},5e3)}}let fe=!1,J=null;function _t(){J&&clearTimeout(J);const e=document.getElementById("finalMessageText");e&&_===9&&(e.textContent="",fe=!1,J=setTimeout(()=>{_===9&&(fe=!0,Je(e,"Espero que guarde esse presente como algo bom na sua memória e que algum dia você possa contar aos nosso filhos a história de como te pedi em namoro. Te amo em todas as vidas 💜",0))},1e3))}function Je(e,o,a){_!==9||!fe||a<o.length&&(e.textContent=o.substring(0,a+1),setTimeout(()=>{Je(e,o,a+1)},60))}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",ke):ke();
