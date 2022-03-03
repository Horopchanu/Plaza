domReady(() => {
  // тестовая разметка поиска по категориям
  const categoriesTestLayout = `<div class="tenants-result__grid tenants-grid">
 <div class="tenants-grid__item tenant-item">
   <div class="tenant-item__inner">
     <div class="tenant-item__bg-wrap">
       <img
         src="images/content/levis-bg.jpg"
         alt=""
         class="tenant-item__bg-img"
       />
     </div>
     <div class="tenant-item__content">
       <div class="tenant-item__logo-wrap">
         <img
           src="images/content/levis-big-logo.jpg"
           alt=""
           class="tenant-item__logo-img"
         />
       </div>
       <div class="tenant-item__info">
         <div class="tenant-item__info-col -text">
           <div class="tenant-item__text-title">Levis</div>
           <div class="tenant-item__text-description">
             Обувь, Одежда, Аксессуары
           </div>
         </div>
         <div class="tenant-item__info-col -map">
           <a href="#" class="tenant-item__map-link">
             На карте
           </a>
         </div>
       </div>
     </div>
   </div>
 </div>
 <div class="tenants-grid__item tenant-item">
   <div class="tenant-item__inner">
     <div class="tenant-item__bg-wrap">
       <img
         src="images/content/levis-bg.jpg"
         alt=""
         class="tenant-item__bg-img"
       />
     </div>
     <div class="tenant-item__content">
       <div class="tenant-item__logo-wrap">
         <img
           src="images/content/levis-big-logo.jpg"
           alt=""
           class="tenant-item__logo-img"
         />
       </div>
       <div class="tenant-item__info">
         <div class="tenant-item__info-col -text">
           <div class="tenant-item__text-title">Levis</div>
           <div class="tenant-item__text-description">
             Обувь, Одежда, Аксессуары
           </div>
         </div>
         <div class="tenant-item__info-col -map">
           <a href="#" class="tenant-item__map-link">
             На карте
           </a>
         </div>
       </div>
     </div>
   </div>
 </div>
 <div class="tenants-grid__item tenant-item">
   <div class="tenant-item__inner">
     <div class="tenant-item__bg-wrap">
       <img
         src="images/content/levis-bg.jpg"
         alt=""
         class="tenant-item__bg-img"
       />
     </div>
     <div class="tenant-item__content">
       <div class="tenant-item__logo-wrap">
         <img
           src="images/content/levis-big-logo.jpg"
           alt=""
           class="tenant-item__logo-img"
         />
       </div>
       <div class="tenant-item__info">
         <div class="tenant-item__info-col -text">
           <div class="tenant-item__text-title">Levis</div>
           <div class="tenant-item__text-description">
             Обувь, Одежда, Аксессуары
           </div>
         </div>
         <div class="tenant-item__info-col -map">
           <a href="#" class="tenant-item__map-link">
             На карте
           </a>
         </div>
       </div>
     </div>
   </div>
 </div>
 <div class="tenants-grid__item tenant-item">
   <div class="tenant-item__inner">
     <div class="tenant-item__bg-wrap">
       <img
         src="images/content/levis-bg.jpg"
         alt=""
         class="tenant-item__bg-img"
       />
     </div>
     <div class="tenant-item__content">
       <div class="tenant-item__logo-wrap">
         <img
           src="images/content/levis-big-logo.jpg"
           alt=""
           class="tenant-item__logo-img"
         />
       </div>
       <div class="tenant-item__info">
         <div class="tenant-item__info-col -text">
           <div class="tenant-item__text-title">Levis</div>
           <div class="tenant-item__text-description">
             Обувь, Одежда, Аксессуары
           </div>
         </div>
         <div class="tenant-item__info-col -map">
           <a href="#" class="tenant-item__map-link">
             На карте
           </a>
         </div>
       </div>
     </div>
   </div>
 </div>
 <div class="tenants-grid__item tenant-item">
 <div class="tenant-item__inner">
   <div class="tenant-item__bg-wrap">
     <img
       src="images/content/levis-bg.jpg"
       alt=""
       class="tenant-item__bg-img"
     />
   </div>
   <div class="tenant-item__content">
     <div class="tenant-item__logo-wrap">
       <img
         src="images/content/levis-big-logo.jpg"
         alt=""
         class="tenant-item__logo-img"
       />
     </div>
     <div class="tenant-item__info">
       <div class="tenant-item__info-col -text">
         <div class="tenant-item__text-title">Levis</div>
         <div class="tenant-item__text-description">
           Обувь, Одежда, Аксессуары
         </div>
       </div>
       <div class="tenant-item__info-col -map">
         <a href="#" class="tenant-item__map-link">
           На карте
         </a>
       </div>
     </div>
   </div>
 </div>
</div>
 <div class="tenants-grid__item tenant-item">
   <div class="tenant-item__inner">
     <div class="tenant-item__bg-wrap">
       <img
         src="images/content/levis-bg.jpg"
         alt=""
         class="tenant-item__bg-img"
       />
     </div>
     <div class="tenant-item__content">
       <div class="tenant-item__logo-wrap">
         <img
           src="images/content/levis-big-logo.jpg"
           alt=""
           class="tenant-item__logo-img"
         />
       </div>
       <div class="tenant-item__info">
         <div class="tenant-item__info-col -text">
           <div class="tenant-item__text-title">Levis</div>
           <div class="tenant-item__text-description">
             Обувь, Одежда, Аксессуары
           </div>
         </div>
         <div class="tenant-item__info-col -map">
           <a href="#" class="tenant-item__map-link">
             На карте
           </a>
         </div>
       </div>
     </div>
   </div>
 </div>
 <div class="tenants-grid__item tenant-item -service">
   <div class="tenant-item__inner">
     <div class="tenant-item__content">
       <div class="tenant-item__service-icon">
         <svg
           width="60"
           height="62"
           viewBox="0 0 60 62"
           fill="black"
           xmlns="http://www.w3.org/2000/svg"
         >
           <path
             fill-rule="evenodd"
             clip-rule="evenodd"
             d="M58 2H2V12.2295H58V2ZM0 0V14.2295H60V0H0Z"
           />
           <path
             fill-rule="evenodd"
             clip-rule="evenodd"
             d="M50.678 8L10 8L10 6L50.678 6L50.678 8Z"
           />
           <path d="M13 6H48V62H13V6Z" fill="#F3F3F3" />
           <path
             fill-rule="evenodd"
             clip-rule="evenodd"
             d="M46 8H15V60H46V8ZM13 6V62H48V6H13Z"
           />
           <path
             fill-rule="evenodd"
             clip-rule="evenodd"
             d="M31 41.377C35.4183 41.377 39 37.7952 39 33.377C39 28.9587 35.4183 25.377 31 25.377C26.5817 25.377 23 28.9587 23 33.377C23 37.7952 26.5817 41.377 31 41.377ZM31 43.377C36.5228 43.377 41 38.8998 41 33.377C41 27.8541 36.5228 23.377 31 23.377C25.4772 23.377 21 27.8541 21 33.377C21 38.8998 25.4772 43.377 31 43.377Z"
           />
         </svg>
       </div>
       <div class="tenant-item__info">
         <div class="tenant-item__info-col -text">
           <div class="tenant-item__text-title">Банкоматы</div>
           <div class="tenant-item__text-description">
             Для посетителей
           </div>
         </div>
         <div class="tenant-item__info-col -map">
           <a href="#" class="tenant-item__map-link">
             На карте
           </a>
         </div>
       </div>
     </div>
   </div>
 </div>
 <div class="tenants-grid__item tenant-item -service">
   <div class="tenant-item__inner">
     <div class="tenant-item__content">
       <div class="tenant-item__service-icon">
         <svg
           width="86"
           height="60"
           viewBox="0 0 86 60"
           fill="black"
           xmlns="http://www.w3.org/2000/svg"
         >
           <path
             fill-rule="evenodd"
             clip-rule="evenodd"
             d="M43.5 58C46.5376 58 49 55.5376 49 52.5C49 49.4624 46.5376 47 43.5 47C40.4624 47 38 49.4624 38 52.5C38 55.5376 40.4624 58 43.5 58ZM43.5 60C47.6421 60 51 56.6421 51 52.5C51 48.3579 47.6421 45 43.5 45C39.3579 45 36 48.3579 36 52.5C36 56.6421 39.3579 60 43.5 60Z"
           />
           <path
             fill-rule="evenodd"
             clip-rule="evenodd"
             d="M42.9993 32C39.3223 32 35.6813 32.7242 32.2842 34.1314C28.8871 35.5385 25.8004 37.601 23.2003 40.201L21.7861 38.7868C24.5719 36.001 27.8791 33.7913 31.5188 32.2836C35.1586 30.776 39.0597 30 42.9993 30C46.939 30 50.8401 30.776 54.4798 32.2836C58.1196 33.7913 61.4268 36.001 64.2125 38.7868L62.7983 40.201C60.1983 37.601 57.1116 35.5385 53.7145 34.1314C50.3174 32.7242 46.6763 32 42.9993 32Z"
           />
           <path
             fill-rule="evenodd"
             clip-rule="evenodd"
             d="M42.9995 17C37.3527 17 31.7611 18.1122 26.5441 20.2732C21.3271 22.4341 16.5868 25.6015 12.5939 29.5944L11.1797 28.1802C15.3583 24.0016 20.3191 20.6869 25.7787 18.4254C31.2384 16.164 37.09 15 42.9995 15C48.909 15 54.7606 16.164 60.2202 18.4254C65.6799 20.6869 70.6407 24.0016 74.8193 28.1802L73.4051 29.5944C69.4122 25.6015 64.6719 22.4341 59.4549 20.2732C54.2379 18.1122 48.6463 17 42.9995 17Z"
           />
           <path
             fill-rule="evenodd"
             clip-rule="evenodd"
             d="M42.9996 2C35.383 2 27.8409 3.50022 20.804 6.41499C13.7671 9.32977 7.37325 13.602 1.98746 18.9878L0.573242 17.5736C6.14476 12.0021 12.7591 7.58252 20.0386 4.56723C27.3182 1.55195 35.1203 0 42.9996 0C50.879 0 58.6811 1.55194 65.9607 4.56722C73.2402 7.58251 79.8545 12.0021 85.4261 17.5736L84.0118 18.9878C78.6261 13.602 72.2322 9.32975 65.1953 6.41498C58.1584 3.50021 50.6163 2 42.9996 2Z"
           />
         </svg>
       </div>
       <div class="tenant-item__info">
         <div class="tenant-item__info-col -text">
           <div class="tenant-item__text-title">Банкоматы</div>
           <div class="tenant-item__text-description">
             Для посетителей
           </div>
         </div>
         <div class="tenant-item__info-col -map">
           <a href="#" class="tenant-item__map-link">
             На карте
           </a>
         </div>
       </div>
     </div>
   </div>
 </div>
</div>`;

  const categoriesTestLayoutAdded = `
 <div class="tenants-grid__item tenant-item -added">
   <div class="tenant-item__inner">
     <div class="tenant-item__bg-wrap">
       <img
         src="images/content/levis-bg.jpg"
         alt=""
         class="tenant-item__bg-img"
       />
     </div>
     <div class="tenant-item__content">
       <div class="tenant-item__logo-wrap">
         <img
           src="images/content/levis-big-logo.jpg"
           alt=""
           class="tenant-item__logo-img"
         />
       </div>
       <div class="tenant-item__info">
         <div class="tenant-item__info-col -text">
           <div class="tenant-item__text-title">Levis</div>
           <div class="tenant-item__text-description">
             Обувь, Одежда, Аксессуары
           </div>
         </div>
         <div class="tenant-item__info-col -map">
           <a href="#" class="tenant-item__map-link">
             На карте
           </a>
         </div>
       </div>
     </div>
   </div>
 </div>
 <div class="tenants-grid__item tenant-item  -added">
   <div class="tenant-item__inner">
     <div class="tenant-item__bg-wrap">
       <img
         src="images/content/levis-bg.jpg"
         alt=""
         class="tenant-item__bg-img"
       />
     </div>
     <div class="tenant-item__content">
       <div class="tenant-item__logo-wrap">
         <img
           src="images/content/levis-big-logo.jpg"
           alt=""
           class="tenant-item__logo-img"
         />
       </div>
       <div class="tenant-item__info">
         <div class="tenant-item__info-col -text">
           <div class="tenant-item__text-title">Levis</div>
           <div class="tenant-item__text-description">
             Обувь, Одежда, Аксессуары
           </div>
         </div>
         <div class="tenant-item__info-col -map">
           <a href="#" class="tenant-item__map-link">
             На карте
           </a>
         </div>
       </div>
     </div>
   </div>
 </div>
 <div class="tenants-grid__item tenant-item  -added">
   <div class="tenant-item__inner">
     <div class="tenant-item__bg-wrap">
       <img
         src="images/content/levis-bg.jpg"
         alt=""
         class="tenant-item__bg-img"
       />
     </div>
     <div class="tenant-item__content">
       <div class="tenant-item__logo-wrap">
         <img
           src="images/content/levis-big-logo.jpg"
           alt=""
           class="tenant-item__logo-img"
         />
       </div>
       <div class="tenant-item__info">
         <div class="tenant-item__info-col -text">
           <div class="tenant-item__text-title">Levis</div>
           <div class="tenant-item__text-description">
             Обувь, Одежда, Аксессуары
           </div>
         </div>
         <div class="tenant-item__info-col -map">
           <a href="#" class="tenant-item__map-link">
             На карте
           </a>
         </div>
       </div>
     </div>
   </div>
 </div>
 <div class="tenants-grid__item tenant-item  -added">
   <div class="tenant-item__inner">
     <div class="tenant-item__bg-wrap">
       <img
         src="images/content/levis-bg.jpg"
         alt=""
         class="tenant-item__bg-img"
       />
     </div>
     <div class="tenant-item__content">
       <div class="tenant-item__logo-wrap">
         <img
           src="images/content/levis-big-logo.jpg"
           alt=""
           class="tenant-item__logo-img"
         />
       </div>
       <div class="tenant-item__info">
         <div class="tenant-item__info-col -text">
           <div class="tenant-item__text-title">Levis</div>
           <div class="tenant-item__text-description">
             Обувь, Одежда, Аксессуары
           </div>
         </div>
         <div class="tenant-item__info-col -map">
           <a href="#" class="tenant-item__map-link">
             На карте
           </a>
         </div>
       </div>
     </div>
   </div>
 </div>
 <div class="tenants-grid__item tenant-item  -added">
 <div class="tenant-item__inner">
   <div class="tenant-item__bg-wrap">
     <img
       src="images/content/levis-bg.jpg"
       alt=""
       class="tenant-item__bg-img"
     />
   </div>
   <div class="tenant-item__content">
     <div class="tenant-item__logo-wrap">
       <img
         src="images/content/levis-big-logo.jpg"
         alt=""
         class="tenant-item__logo-img"
       />
     </div>
     <div class="tenant-item__info">
       <div class="tenant-item__info-col -text">
         <div class="tenant-item__text-title">Levis</div>
         <div class="tenant-item__text-description">
           Обувь, Одежда, Аксессуары
         </div>
       </div>
       <div class="tenant-item__info-col -map">
         <a href="#" class="tenant-item__map-link">
           На карте
         </a>
       </div>
     </div>
   </div>
 </div>
</div>
 <div class="tenants-grid__item tenant-item  -added">
   <div class="tenant-item__inner">
     <div class="tenant-item__bg-wrap">
       <img
         src="images/content/levis-bg.jpg"
         alt=""
         class="tenant-item__bg-img"
       />
     </div>
     <div class="tenant-item__content">
       <div class="tenant-item__logo-wrap">
         <img
           src="images/content/levis-big-logo.jpg"
           alt=""
           class="tenant-item__logo-img"
         />
       </div>
       <div class="tenant-item__info">
         <div class="tenant-item__info-col -text">
           <div class="tenant-item__text-title">Levis</div>
           <div class="tenant-item__text-description">
             Обувь, Одежда, Аксессуары
           </div>
         </div>
         <div class="tenant-item__info-col -map">
           <a href="#" class="tenant-item__map-link">
             На карте
           </a>
         </div>
       </div>
     </div>
   </div>
 </div>
 <div class="tenants-grid__item tenant-item -service  -added">
   <div class="tenant-item__inner">
     <div class="tenant-item__content">
       <div class="tenant-item__service-icon">
         <svg
           width="60"
           height="62"
           viewBox="0 0 60 62"
           fill="black"
           xmlns="http://www.w3.org/2000/svg"
         >
           <path
             fill-rule="evenodd"
             clip-rule="evenodd"
             d="M58 2H2V12.2295H58V2ZM0 0V14.2295H60V0H0Z"
           />
           <path
             fill-rule="evenodd"
             clip-rule="evenodd"
             d="M50.678 8L10 8L10 6L50.678 6L50.678 8Z"
           />
           <path d="M13 6H48V62H13V6Z" fill="#F3F3F3" />
           <path
             fill-rule="evenodd"
             clip-rule="evenodd"
             d="M46 8H15V60H46V8ZM13 6V62H48V6H13Z"
           />
           <path
             fill-rule="evenodd"
             clip-rule="evenodd"
             d="M31 41.377C35.4183 41.377 39 37.7952 39 33.377C39 28.9587 35.4183 25.377 31 25.377C26.5817 25.377 23 28.9587 23 33.377C23 37.7952 26.5817 41.377 31 41.377ZM31 43.377C36.5228 43.377 41 38.8998 41 33.377C41 27.8541 36.5228 23.377 31 23.377C25.4772 23.377 21 27.8541 21 33.377C21 38.8998 25.4772 43.377 31 43.377Z"
           />
         </svg>
       </div>
       <div class="tenant-item__info">
         <div class="tenant-item__info-col -text">
           <div class="tenant-item__text-title">Банкоматы</div>
           <div class="tenant-item__text-description">
             Для посетителей
           </div>
         </div>
         <div class="tenant-item__info-col -map">
           <a href="#" class="tenant-item__map-link">
             На карте
           </a>
         </div>
       </div>
     </div>
   </div>
 </div>
 <div class="tenants-grid__item tenant-item -service  -added">
   <div class="tenant-item__inner">
     <div class="tenant-item__content">
       <div class="tenant-item__service-icon">
         <svg
           width="86"
           height="60"
           viewBox="0 0 86 60"
           fill="black"
           xmlns="http://www.w3.org/2000/svg"
         >
           <path
             fill-rule="evenodd"
             clip-rule="evenodd"
             d="M43.5 58C46.5376 58 49 55.5376 49 52.5C49 49.4624 46.5376 47 43.5 47C40.4624 47 38 49.4624 38 52.5C38 55.5376 40.4624 58 43.5 58ZM43.5 60C47.6421 60 51 56.6421 51 52.5C51 48.3579 47.6421 45 43.5 45C39.3579 45 36 48.3579 36 52.5C36 56.6421 39.3579 60 43.5 60Z"
           />
           <path
             fill-rule="evenodd"
             clip-rule="evenodd"
             d="M42.9993 32C39.3223 32 35.6813 32.7242 32.2842 34.1314C28.8871 35.5385 25.8004 37.601 23.2003 40.201L21.7861 38.7868C24.5719 36.001 27.8791 33.7913 31.5188 32.2836C35.1586 30.776 39.0597 30 42.9993 30C46.939 30 50.8401 30.776 54.4798 32.2836C58.1196 33.7913 61.4268 36.001 64.2125 38.7868L62.7983 40.201C60.1983 37.601 57.1116 35.5385 53.7145 34.1314C50.3174 32.7242 46.6763 32 42.9993 32Z"
           />
           <path
             fill-rule="evenodd"
             clip-rule="evenodd"
             d="M42.9995 17C37.3527 17 31.7611 18.1122 26.5441 20.2732C21.3271 22.4341 16.5868 25.6015 12.5939 29.5944L11.1797 28.1802C15.3583 24.0016 20.3191 20.6869 25.7787 18.4254C31.2384 16.164 37.09 15 42.9995 15C48.909 15 54.7606 16.164 60.2202 18.4254C65.6799 20.6869 70.6407 24.0016 74.8193 28.1802L73.4051 29.5944C69.4122 25.6015 64.6719 22.4341 59.4549 20.2732C54.2379 18.1122 48.6463 17 42.9995 17Z"
           />
           <path
             fill-rule="evenodd"
             clip-rule="evenodd"
             d="M42.9996 2C35.383 2 27.8409 3.50022 20.804 6.41499C13.7671 9.32977 7.37325 13.602 1.98746 18.9878L0.573242 17.5736C6.14476 12.0021 12.7591 7.58252 20.0386 4.56723C27.3182 1.55195 35.1203 0 42.9996 0C50.879 0 58.6811 1.55194 65.9607 4.56722C73.2402 7.58251 79.8545 12.0021 85.4261 17.5736L84.0118 18.9878C78.6261 13.602 72.2322 9.32975 65.1953 6.41498C58.1584 3.50021 50.6163 2 42.9996 2Z"
           />
         </svg>
       </div>
       <div class="tenant-item__info">
         <div class="tenant-item__info-col -text">
           <div class="tenant-item__text-title">Банкоматы</div>
           <div class="tenant-item__text-description">
             Для посетителей
           </div>
         </div>
         <div class="tenant-item__info-col -map">
           <a href="#" class="tenant-item__map-link">
             На карте
           </a>
         </div>
       </div>
     </div>
   </div>
 </div>
</div>`;

  const tenantsAlphabetTestLayout = `<div class="tenants-alphabet">
<div class="tenants-alphabet__block">
 <div class="tenants-alphabet__col -letter">
   <div class="tenants-alphabet__letter">A</div>
 </div>
 <div class="tenants-alphabet__col -result">
   <div class="tenants-alphabet__line">
     <a href="#" class="tenants-alphabet__tenant-name">
       Adidas
     </a>
   </div>
   <div class="tenants-alphabet__line">
     <a href="#" class="tenants-alphabet__tenant-name">
       Adidas Kids
     </a>
     <div class="tenants-alphabet__tenant-sale-wrap">
       <div class="tenants-alphabet__tenant-sale">Акция</div>
     </div>
   </div>
   <div class="tenants-alphabet__line">
     <a href="#" class="tenants-alphabet__tenant-name">
       ALBIONE
     </a>
   </div>
   <div class="tenants-alphabet__line">
     <a href="#" class="tenants-alphabet__tenant-name">
       AMAiATOGO
     </a>
   </div>
   <div class="tenants-alphabet__line">
     <a href="#" class="tenants-alphabet__tenant-name">
       ARMANI EXCHANGE
     </a>
   </div>
 </div>
</div>
<div class="tenants-alphabet__block">
 <div class="tenants-alphabet__col -letter">
   <div class="tenants-alphabet__letter">B</div>
 </div>
 <div class="tenants-alphabet__col -result">
   <div class="tenants-alphabet__line">
     <a href="#" class="tenants-alphabet__tenant-name">
       BOGGI MILANO
     </a>
     <div class="tenants-alphabet__tenant-sale-wrap">
       <div class="tenants-alphabet__tenant-sale">Акция</div>
     </div>
   </div>
   <div class="tenants-alphabet__line">
     <a href="#" class="tenants-alphabet__tenant-name"
       >BORK</a
     >
   </div>
 </div>
</div>
</div>`;
  const tenantsAlphabetTestLayoutAdded = `
<div class="tenants-alphabet__block  -added">
 <div class="tenants-alphabet__col -letter">
   <div class="tenants-alphabet__letter">A</div>
 </div>
 <div class="tenants-alphabet__col -result">
   <div class="tenants-alphabet__line">
     <a href="#" class="tenants-alphabet__tenant-name">
       Adidas
     </a>
   </div>
   <div class="tenants-alphabet__line">
     <a href="#" class="tenants-alphabet__tenant-name">
       Adidas Kids
     </a>
     <div class="tenants-alphabet__tenant-sale-wrap">
       <div class="tenants-alphabet__tenant-sale">Акция</div>
     </div>
   </div>
   <div class="tenants-alphabet__line">
     <a href="#" class="tenants-alphabet__tenant-name">
       ALBIONE
     </a>
   </div>
   <div class="tenants-alphabet__line">
     <a href="#" class="tenants-alphabet__tenant-name">
       AMAiATOGO
     </a>
   </div>
   <div class="tenants-alphabet__line">
     <a href="#" class="tenants-alphabet__tenant-name">
       ARMANI EXCHANGE
     </a>
   </div>
 </div>
</div>
<div class="tenants-alphabet__block  -added">
 <div class="tenants-alphabet__col -letter">
   <div class="tenants-alphabet__letter">B</div>
 </div>
 <div class="tenants-alphabet__col -result">
   <div class="tenants-alphabet__line">
     <a href="#" class="tenants-alphabet__tenant-name">
       BOGGI MILANO
     </a>
     <div class="tenants-alphabet__tenant-sale-wrap">
       <div class="tenants-alphabet__tenant-sale">Акция</div>
     </div>
   </div>
   <div class="tenants-alphabet__line">
     <a href="#" class="tenants-alphabet__tenant-name"
       >BORK</a
     >
   </div>
 </div>
</div>`;
  const eventTestLayout = ` <div class="varied-grid">
  <div class="varied-grid__item varied-card -recommend">
    <div class="varied-card__inner">
      <div class="varied-card__bg">
        <img
          src="images/content/compilation-1.jpg"
          alt=""
          class="varied-card__bg-img"
        />
      </div>
      <button class="varied-card__like">
        <span class="varied-card__like-icon">
          <svg
            width="24"
            height="20"
            viewBox="0 0 24 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7.10632 0C8.86157 0 10.8051 1.00361 12 2.30769C13.1949 1.00361 15.1384 0 16.8937 0C20.595 0 24 3.07918 24 7.4508C24 14.6518 12 20 12 20C12 20 0 14.6518 0 7.4508C0 3.07918 3.40503 0 7.10632 0Z"
              fill="#E21836"
            />
          </svg>
        </span>
        <span class="varied-card__like-count">28</span>
      </button>
      <span class="varied-card__activity-name ui-btn">
        Вкусный завтрак
      </span>
      <span class="varied-card__activity-count"> 12 </span>
    </div>
  </div>
  <div class="varied-grid__item varied-card -event">
    <div class="varied-card__inner">
      <div class="varied-card__half-bg-wrap">
        <img
          src="images/content/compilation-2.jpg"
          class="varied-card__half-bg-img"
        />
        <img
          src="images/content/compilation-3.jpg"
          class="varied-card__half-bg-img -hover"
        />
        <div class="varied-card__half-bg-logo">
          <img
            src="images/content/levis-logo.png"
            alt=""
            class="varied-card__half-bg-logo-img"
          />
        </div>
      </div>
      <div class="varied-card__event-info">
        <div class="varied-card__event-info-tags">
          <a
            href="#"
            class="varied-card__event-info-tag ui-btn -h30"
          >
            Акция
          </a>
          <a
            href="#"
            class="varied-card__event-info-tag ui-btn -h30"
          >
            Levis
          </a>
        </div>
        <div class="varied-card__event-info-title">
          #denimbazaar: скидка-50% дополнительно на вторую вещь
          #denimbazaar: скидка-50% дополнительно на вторую вещь
        </div>
        <div class="varied-card__event-info-date">
          10 апр ‒ 10 июл
        </div>
      </div>
    </div>
  </div>
  <div class="varied-grid__item varied-card -sale">
    <div class="varied-card__inner">
      <div class="varied-card__bg">
        <img
          src="images/content/compilation-3.jpg"
          alt=""
          class="varied-card__bg-img"
        />
        <img
          src="images/content/compilation-3.jpg"
          class="varied-card__half-bg-img -hover"
        />
      </div>
      <div class="varied-card__sale-content">
        <div class="varied-card__sale-tags">
          <a
            href="#"
            class="
              varied-card__sale-tag
              ui-btn
              -white-border-white
              -h30
            "
          >
            Скидка
          </a>
        </div>
        <div class="varied-card__sale-title">
          В Gloria Jeans Суперскидки
        </div>
        <div class="varied-card__sale-subtitle">
          от 50 до 90%
        </div>
        <div class="varied-card__sale-bottom">
          На все шорты для детей и взрослых!
        </div>
      </div>
    </div>
  </div>
  <div class="varied-grid__item varied-card -event">
    <div class="varied-card__inner">
      <div class="varied-card__half-bg-wrap">
        <img
          src="images/content/compilation-5.jpg"
          class="varied-card__half-bg-img"
        />
        <img
          src="images/content/compilation-3.jpg"
          class="varied-card__half-bg-img -hover"
        />
        <div class="varied-card__half-bg-logo">
          <img
            src="images/content/handm.png"
            alt=""
            class="varied-card__half-bg-logo-img"
          />
        </div>
      </div>
      <div class="varied-card__event-info">
        <div class="varied-card__event-info-tags">
          <a
            href="#"
            class="varied-card__event-info-tag ui-btn -h30"
          >
            Скидка
          </a>
          <a
            href="#"
            class="varied-card__event-info-tag ui-btn -h30"
          >
            H&M
          </a>
        </div>
        <div class="varied-card__event-info-title">
          #denimbazaar: скидка-50% дополнительно на вторую вещь
        </div>
        <div class="varied-card__event-info-date">
          10 апр ‒ 10 июл
        </div>
      </div>
    </div>
  </div>
  <div class="varied-grid__item varied-card -recommend">
    <div class="varied-card__inner">
      <div class="varied-card__bg">
        <img
          src="images/content/compilation-4.jpg"
          alt=""
          class="varied-card__bg-img"
        />
      </div>
      <button class="varied-card__like">
        <span class="varied-card__like-icon">
          <svg
            width="24"
            height="20"
            viewBox="0 0 24 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7.10632 0C8.86157 0 10.8051 1.00361 12 2.30769C13.1949 1.00361 15.1384 0 16.8937 0C20.595 0 24 3.07918 24 7.4508C24 14.6518 12 20 12 20C12 20 0 14.6518 0 7.4508C0 3.07918 3.40503 0 7.10632 0Z"
              fill="#E21836"
            />
          </svg>
        </span>
        <span class="varied-card__like-count">67</span>
      </button>
      <span class="varied-card__activity-name ui-btn">
        тренировка
      </span>
      <span class="varied-card__activity-count"> 35 </span>
    </div>
  </div>
  <div class="varied-grid__item varied-card -event">
    <div class="varied-card__inner">
      <div class="varied-card__half-bg-wrap">
        <img
          src="images/content/compilation-6.jpg"
          class="varied-card__half-bg-img"
        />
        <img
          src="images/content/compilation-3.jpg"
          class="varied-card__half-bg-img -hover"
        />
        <div class="varied-card__half-bg-logo">
          <img
            src="images/content/nike.png"
            alt=""
            class="varied-card__half-bg-logo-img"
          />
        </div>
      </div>
      <div class="varied-card__event-info">
        <div class="varied-card__event-info-tags">
          <a
            href="#"
            class="varied-card__event-info-tag ui-btn -h30"
          >
            Скидка
          </a>
          <a
            href="#"
            class="varied-card__event-info-tag ui-btn -h30"
          >
            Nike
          </a>
        </div>
        <div class="varied-card__event-info-title">
          #denimbazaar: скидка-50% дополнительно на вторую вещь
        </div>
        <div class="varied-card__event-info-date">
          Осталось 5 дней
        </div>
      </div>
    </div>
  </div>
</div>`;
  const eventTestLayoutAdded = `
  <div class="varied-grid__item varied-card -recommend -added">
    <div class="varied-card__inner">
      <div class="varied-card__bg">
        <img
          src="images/content/compilation-1.jpg"
          alt=""
          class="varied-card__bg-img"
        />
      </div>
      <button class="varied-card__like">
        <span class="varied-card__like-icon">
          <svg
            width="24"
            height="20"
            viewBox="0 0 24 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7.10632 0C8.86157 0 10.8051 1.00361 12 2.30769C13.1949 1.00361 15.1384 0 16.8937 0C20.595 0 24 3.07918 24 7.4508C24 14.6518 12 20 12 20C12 20 0 14.6518 0 7.4508C0 3.07918 3.40503 0 7.10632 0Z"
              fill="#E21836"
            />
          </svg>
        </span>
        <span class="varied-card__like-count">28</span>
      </button>
      <span class="varied-card__activity-name ui-btn">
        Вкусный завтрак
      </span>
      <span class="varied-card__activity-count"> 12 </span>
    </div>
  </div>
  <div class="varied-grid__item varied-card -event  -added">
    <div class="varied-card__inner">
      <div class="varied-card__half-bg-wrap">
        <img
          src="images/content/compilation-2.jpg"
          class="varied-card__half-bg-img"
        />
        <img
          src="images/content/compilation-3.jpg"
          class="varied-card__half-bg-img -hover"
        />
        <div class="varied-card__half-bg-logo">
          <img
            src="images/content/levis-logo.png"
            alt=""
            class="varied-card__half-bg-logo-img"
          />
        </div>
      </div>
      <div class="varied-card__event-info">
        <div class="varied-card__event-info-tags">
          <a
            href="#"
            class="varied-card__event-info-tag ui-btn -h30"
          >
            Акция
          </a>
          <a
            href="#"
            class="varied-card__event-info-tag ui-btn -h30"
          >
            Levis
          </a>
        </div>
        <div class="varied-card__event-info-title">
          #denimbazaar: скидка-50% дополнительно на вторую вещь
          #denimbazaar: скидка-50% дополнительно на вторую вещь
        </div>
        <div class="varied-card__event-info-date">
          10 апр ‒ 10 июл
        </div>
      </div>
    </div>
  </div>
  <div class="varied-grid__item varied-card -sale  -added">
    <div class="varied-card__inner">
      <div class="varied-card__bg">
        <img
          src="images/content/compilation-3.jpg"
          alt=""
          class="varied-card__bg-img"
        />
        <img
          src="images/content/compilation-3.jpg"
          class="varied-card__half-bg-img -hover"
        />
      </div>
      <div class="varied-card__sale-content">
        <div class="varied-card__sale-tags">
          <a
            href="#"
            class="
              varied-card__sale-tag
              ui-btn
              -white-border-white
              -h30
            "
          >
            Скидка
          </a>
        </div>
        <div class="varied-card__sale-title">
          В Gloria Jeans Суперскидки
        </div>
        <div class="varied-card__sale-subtitle">
          от 50 до 90%
        </div>
        <div class="varied-card__sale-bottom">
          На все шорты для детей и взрослых!
        </div>
      </div>
    </div>
  </div>
  <div class="varied-grid__item varied-card -event  -added">
    <div class="varied-card__inner">
      <div class="varied-card__half-bg-wrap">
        <img
          src="images/content/compilation-5.jpg"
          class="varied-card__half-bg-img"
        />
        <img
          src="images/content/compilation-3.jpg"
          class="varied-card__half-bg-img -hover"
        />
        <div class="varied-card__half-bg-logo">
          <img
            src="images/content/handm.png"
            alt=""
            class="varied-card__half-bg-logo-img"
          />
        </div>
      </div>
      <div class="varied-card__event-info">
        <div class="varied-card__event-info-tags">
          <a
            href="#"
            class="varied-card__event-info-tag ui-btn -h30"
          >
            Скидка
          </a>
          <a
            href="#"
            class="varied-card__event-info-tag ui-btn -h30"
          >
            H&M
          </a>
        </div>
        <div class="varied-card__event-info-title">
          #denimbazaar: скидка-50% дополнительно на вторую вещь
        </div>
        <div class="varied-card__event-info-date">
          10 апр ‒ 10 июл
        </div>
      </div>
    </div>
  </div>
  <div class="varied-grid__item varied-card -recommend  -added">
    <div class="varied-card__inner">
      <div class="varied-card__bg">
        <img
          src="images/content/compilation-4.jpg"
          alt=""
          class="varied-card__bg-img"
        />
      </div>
      <button class="varied-card__like">
        <span class="varied-card__like-icon">
          <svg
            width="24"
            height="20"
            viewBox="0 0 24 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7.10632 0C8.86157 0 10.8051 1.00361 12 2.30769C13.1949 1.00361 15.1384 0 16.8937 0C20.595 0 24 3.07918 24 7.4508C24 14.6518 12 20 12 20C12 20 0 14.6518 0 7.4508C0 3.07918 3.40503 0 7.10632 0Z"
              fill="#E21836"
            />
          </svg>
        </span>
        <span class="varied-card__like-count">67</span>
      </button>
      <span class="varied-card__activity-name ui-btn">
        тренировка
      </span>
      <span class="varied-card__activity-count"> 35 </span>
    </div>
  </div>
  <div class="varied-grid__item varied-card -event  -added">
    <div class="varied-card__inner">
      <div class="varied-card__half-bg-wrap">
        <img
          src="images/content/compilation-6.jpg"
          class="varied-card__half-bg-img"
        />
        <img
          src="images/content/compilation-3.jpg"
          class="varied-card__half-bg-img -hover"
        />
        <div class="varied-card__half-bg-logo">
          <img
            src="images/content/nike.png"
            alt=""
            class="varied-card__half-bg-logo-img"
          />
        </div>
      </div>
      <div class="varied-card__event-info">
        <div class="varied-card__event-info-tags">
          <a
            href="#"
            class="varied-card__event-info-tag ui-btn -h30"
          >
            Скидка
          </a>
          <a
            href="#"
            class="varied-card__event-info-tag ui-btn -h30"
          >
            Nike
          </a>
        </div>
        <div class="varied-card__event-info-title">
          #denimbazaar: скидка-50% дополнительно на вторую вещь
        </div>
        <div class="varied-card__event-info-date">
          Осталось 5 дней
        </div>
      </div>
    </div>
</div>`;

  const tenantsCategoriesBtns = document.querySelectorAll(
    ".tenants-categories__btn"
  );

  const tenantsResult = document.querySelector(".tenants-result");
  if (tenantsCategoriesBtns.length) {
    tenantsCategoriesBtns.forEach((button) => {
      button.addEventListener("click", (event) => {
        tenantsCategoriesBtns.forEach((element) => {
          element.classList.remove("-current");
        });
        event.target
          .closest(".tenants-categories__btn")
          .classList.add("-current");
        event.target
          .closest(".tenants-categories")
          .querySelector(".tenants-mobile-filter__dropdown")
          .classList.remove("-active");
        event.target
          .closest(".tenants-categories__list-wrap")
          .classList.remove("-active");
        updateResults(newResults);
        setTimeout(() => {
          pages = 5;
          loadMore.pause();
          loadMore.scrollTrigger.disable();
          loadMore.scrollTrigger.refresh();
          loadMore.restart();
          loadMore.scrollTrigger.refresh();
          loadMore.scrollTrigger.enable();
        }, 300);
      });
    });
  }

  const tenantsViewFilterInputs = document.querySelectorAll(
    ".tenants-view__filter-input"
  );
  if (tenantsViewFilterInputs.length) {
    tenantsViewFilterInputs.forEach((input) => {
      input.addEventListener("change", () => {
        updateResults(newResults);
      });
    });
  }

  function updateResults(newResults, durationDown = 0.2, DurationUp = 0.3) {
    gsap.to(tenantsResult, {
      opacity: 0,
      y: 100,
      duration: durationDown,
    });
    setTimeout(() => {
      // здесь получаем новую разметку
      tenantsResult.querySelector(".tenants-result__inner").innerHTML = "";
      tenantsResult.querySelector(".tenants-result__inner").innerHTML =
        newResults;
      gsap.to(tenantsResult, {
        opacity: 1,
        y: 0,
        duration: DurationUp,
      });
    }, 300);
  }
  function updateResultsInstant(newResults) {
    tenantsResult.querySelector(".tenants-result__inner").innerHTML = "";
    tenantsResult.querySelector(".tenants-result__inner").innerHTML =
      newResults;
  }

  // для тестирования
  let newResults = categoriesTestLayout;
  let newResultsAdded = categoriesTestLayoutAdded;
  if (document.querySelector(".tenants-filter-area.-event")) {
    newResults = eventTestLayout;
    newResultsAdded = eventTestLayoutAdded;
  }
  const tenantsViewViewTypeInputs = document.querySelectorAll(
    ".tenants-view__view-type-input"
  );
  if (tenantsViewViewTypeInputs.length) {
    tenantsViewViewTypeInputs.forEach((input) => {
      input.addEventListener("change", (event) => {
        if (event.target.value === "list") {
          newResults = tenantsAlphabetTestLayout;
          newResultsAdded = tenantsAlphabetTestLayoutAdded;
          document.querySelector(".tenants-result").classList.add("-alphabet");
        } else {
          newResults = categoriesTestLayout;
          newResultsAdded = categoriesTestLayoutAdded;
          document
            .querySelector(".tenants-result")
            .classList.remove("-alphabet");
        }
        document
          .querySelectorAll(
            ".tenants-mobile-filter__view-btn, .tenants-view.-mobile"
          )
          .forEach((element) => {
            element.classList.remove("-active");
          });
        updateResults(newResults);
        setTimeout(() => {
          pages = 5;
          loadMore.pause();
          loadMore.scrollTrigger.disable();
          loadMore.scrollTrigger.refresh();
          loadMore.restart();
          loadMore.scrollTrigger.refresh();
          loadMore.scrollTrigger.enable();
        }, 300);
      });
    });
  }

  const tenantsSectionBtns = document.querySelectorAll(".tenants-section__btn");
  const tenantsFilterArea = document.querySelector(".tenants-filter-area");
  const tenantsView = document.querySelector(".tenants-view:not(.-mobile)");
  if (tenantsSectionBtns.length) {
    tenantsSectionBtns.forEach((button) => {
      button.addEventListener("click", (event) => {
        const tabId = event.target.dataset.tab;
        tenantsSectionBtns.forEach((element) => {
          element.classList.remove("-current");
        });
        event.target.classList.add("-current");
        console.log(event.target);
        event.target.blur();

        gsap.to(tenantsResult, {
          opacity: 0,
          y: 100,
          duration: 0.4,
        });
        gsap.to(tenantsFilterArea, {
          opacity: 0,
          y: 100,
          duration: 0.4,
        });
        gsap.to(tenantsView, {
          opacity: 0,
          y: 100,
          duration: 0.4,
        });
        const filterSections = tenantsFilterArea.querySelectorAll("[data-tab]");

        // получаем новую разметку, если необходимо
        setTimeout(() => {
          filterSections.forEach((section) => {
            if (section.dataset.tab === tabId) {
              section.classList.add("-current");
              if (!section.classList.contains("tenants-search")) {
                if (
                  document.querySelector(
                    ".tenants-view__view-type-input:checked"
                  ).value === "cards"
                ) {
                  document
                    .querySelectorAll(".tenants-view__view-type-input:checked")
                    .forEach((element) => {
                      element.checked = false;
                    });
                  section.querySelector(
                    '.tenants-view__view-type-input[value="cards"]'
                  ).checked = true;
                } else {
                  document
                    .querySelectorAll(".tenants-view__view-type-input:checked")
                    .forEach((element) => {
                      element.checked = false;
                    });
                  section.querySelector(
                    '.tenants-view__view-type-input[value="list"]'
                  ).checked = true;
                }
              }
            } else {
              section.classList.remove("-current");
            }
          });
          switch (tabId) {
            case "categories":
              updateResultsInstant(newResults);
              setTimeout(() => {
                pages = 5;
                loadMore.pause();
                loadMore.scrollTrigger.disable();
                loadMore.scrollTrigger.refresh();
                loadMore.restart();
                loadMore.scrollTrigger.refresh();
                loadMore.scrollTrigger.enable();
              }, 500);
              break;
            case "alphabet":
              updateResultsInstant(newResults);
              setTimeout(() => {
                pages = 5;
                loadMore.pause();
                loadMore.scrollTrigger.disable();
                loadMore.scrollTrigger.refresh();
                loadMore.restart();
                loadMore.scrollTrigger.refresh();
                loadMore.scrollTrigger.enable();
              }, 500);
              break;
            case "search":
              tenantsResult.querySelector(".tenants-result__inner").innerHTML =
                "";
              loadMore.pause();
              document
                .querySelector(".tenants-result__loading")
                .classList.remove("-visible");
              break;
            default:
              tenantsResult.querySelector(".tenants-result__inner").innerHTML =
                "";
              break;
          }
          gsap.to(tenantsResult, {
            opacity: 1,
            y: 0,
            duration: 0.4,
            onComplete() {},
          });
          gsap.to(tenantsFilterArea, {
            opacity: 1,
            y: 0,
            duration: 0.4,
          });
          gsap.to(tenantsView, {
            opacity: 1,
            y: 0,
            duration: 0.4,
          });
        }, 400);
      });
    });
  }

  function getTextWidth(textToCalc) {
    const text = document.createElement("span");
    text.style.position = "absolute";
    text.style.top = "-9999px";
    text.style.left = "-9999px";
    text.style.visibility = "hidden";
    text.style.opacity = 0;
    document.body.appendChild(text);
    text.style.font = "RF Dewi";
    if (window.innerWidth > 759) {
      text.style.fontSize = `${48}px`;
    } else {
      text.style.fontSize = `${24}px`;
    }
    text.style.height = "auto";
    text.style.width = "auto";
    text.style.whiteSpace = "no-wrap";
    text.innerHTML = textToCalc;

    const width = Math.ceil(text.clientWidth);
    return width;
  }

  let loadMore;
  let isLoadMoreActive = false;
  let pages = 3;

  const tenantsSearchInput = document.querySelector(".tenants-search__input");
  const tenantsSearchLoading = document.querySelector(
    ".tenants-search__loading"
  );
  if (tenantsSearchInput) {
    let searchTimer;
    tenantsSearchInput.addEventListener("input", function () {
      tenantsSearchLoading.classList.remove("-visible");
      clearTimeout(searchTimer);
      if (this.value) {
        const { value } = this;
        searchTimer = setTimeout(() => {
          if (window.innerWidth > 759) {
            tenantsSearchLoading.style.left = `${getTextWidth(value) + 48}px`;
          } else {
            tenantsSearchLoading.style.left = `${getTextWidth(value) + 28}px`;
          }
          tenantsSearchLoading.classList.add("-visible");
          setTimeout(() => {
            updateResults(newResults);
            tenantsSearchLoading.classList.remove("-visible");
            setTimeout(() => {
              pages = 5;
              if (
                document.querySelector(".-only-search") &&
                isLoadMoreActive === false
              ) {
                setLoadMore();
              }
              loadMore.pause();
              loadMore.scrollTrigger.disable();
              loadMore.scrollTrigger.refresh();
              loadMore.restart();
              loadMore.scrollTrigger.refresh();
              loadMore.scrollTrigger.enable();
            }, 300);
          }, 1000);
        }, 1000);
      }
    });
  }

  function setLoadMore() {
    isLoadMoreActive = true;
    loadMore = gsap.from(".footer-subscribe__input", {
      scrollTrigger: {
        trigger: ".footer-subscribe__input",
        start: "top bottom",
        onEnter() {
          document
            .querySelector(".tenants-result__loading")
            .classList.add("-visible");
          setTimeout(() => {
            if (document.querySelector(".tenants-grid")) {
              tenantsResult
                .querySelector(".tenants-grid")
                .insertAdjacentHTML("beforeend", newResultsAdded);
            } else if (document.querySelector(".tenants-alphabet")) {
              tenantsResult
                .querySelector(".tenants-alphabet")
                .insertAdjacentHTML("beforeend", newResultsAdded);
            } else if (document.querySelector(".varied-grid")) {
              tenantsResult
                .querySelector(".varied-grid")
                .insertAdjacentHTML("beforeend", newResultsAdded);
            }
            document
              .querySelector(".tenants-result__loading")
              .classList.remove("-visible");
            gsap.to(
              [
                ".tenant-item.-added",
                ".tenants-alphabet__block.-added",
                ".varied-card.-added",
              ],
              {
                opacity: 1,
                y: 0,
                duration: 0.3,
                onComplete() {
                  document
                    .querySelectorAll(
                      ".tenant-item.-added, .tenants-alphabet__block.-added, .varied-card.-added"
                    )
                    .forEach((element) => {
                      element.classList.remove("-added");
                    });
                  pages -= 1;
                  if (pages > 0) {
                    loadMore.scrollTrigger.disable();
                    loadMore.scrollTrigger.refresh();
                    loadMore.scrollTrigger.enable();
                  } else {
                    loadMore.pause();
                  }
                },
              }
            );
          }, 2000);
        },
      },
    });
  }
  if (!document.querySelector(".-only-search")) {
    setLoadMore();
  }
});
