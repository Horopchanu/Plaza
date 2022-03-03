"use strict";

domReady(function () {
  // тестовая разметка поиска по категориям
  var categoriesTestLayout = "<div class=\"tenants-result__grid tenants-grid\">\n <div class=\"tenants-grid__item tenant-item\">\n   <div class=\"tenant-item__inner\">\n     <div class=\"tenant-item__bg-wrap\">\n       <img\n         src=\"images/content/levis-bg.jpg\"\n         alt=\"\"\n         class=\"tenant-item__bg-img\"\n       />\n     </div>\n     <div class=\"tenant-item__content\">\n       <div class=\"tenant-item__logo-wrap\">\n         <img\n           src=\"images/content/levis-big-logo.jpg\"\n           alt=\"\"\n           class=\"tenant-item__logo-img\"\n         />\n       </div>\n       <div class=\"tenant-item__info\">\n         <div class=\"tenant-item__info-col -text\">\n           <div class=\"tenant-item__text-title\">Levis</div>\n           <div class=\"tenant-item__text-description\">\n             \u041E\u0431\u0443\u0432\u044C, \u041E\u0434\u0435\u0436\u0434\u0430, \u0410\u043A\u0441\u0435\u0441\u0441\u0443\u0430\u0440\u044B\n           </div>\n         </div>\n         <div class=\"tenant-item__info-col -map\">\n           <a href=\"#\" class=\"tenant-item__map-link\">\n             \u041D\u0430 \u043A\u0430\u0440\u0442\u0435\n           </a>\n         </div>\n       </div>\n     </div>\n   </div>\n </div>\n <div class=\"tenants-grid__item tenant-item\">\n   <div class=\"tenant-item__inner\">\n     <div class=\"tenant-item__bg-wrap\">\n       <img\n         src=\"images/content/levis-bg.jpg\"\n         alt=\"\"\n         class=\"tenant-item__bg-img\"\n       />\n     </div>\n     <div class=\"tenant-item__content\">\n       <div class=\"tenant-item__logo-wrap\">\n         <img\n           src=\"images/content/levis-big-logo.jpg\"\n           alt=\"\"\n           class=\"tenant-item__logo-img\"\n         />\n       </div>\n       <div class=\"tenant-item__info\">\n         <div class=\"tenant-item__info-col -text\">\n           <div class=\"tenant-item__text-title\">Levis</div>\n           <div class=\"tenant-item__text-description\">\n             \u041E\u0431\u0443\u0432\u044C, \u041E\u0434\u0435\u0436\u0434\u0430, \u0410\u043A\u0441\u0435\u0441\u0441\u0443\u0430\u0440\u044B\n           </div>\n         </div>\n         <div class=\"tenant-item__info-col -map\">\n           <a href=\"#\" class=\"tenant-item__map-link\">\n             \u041D\u0430 \u043A\u0430\u0440\u0442\u0435\n           </a>\n         </div>\n       </div>\n     </div>\n   </div>\n </div>\n <div class=\"tenants-grid__item tenant-item\">\n   <div class=\"tenant-item__inner\">\n     <div class=\"tenant-item__bg-wrap\">\n       <img\n         src=\"images/content/levis-bg.jpg\"\n         alt=\"\"\n         class=\"tenant-item__bg-img\"\n       />\n     </div>\n     <div class=\"tenant-item__content\">\n       <div class=\"tenant-item__logo-wrap\">\n         <img\n           src=\"images/content/levis-big-logo.jpg\"\n           alt=\"\"\n           class=\"tenant-item__logo-img\"\n         />\n       </div>\n       <div class=\"tenant-item__info\">\n         <div class=\"tenant-item__info-col -text\">\n           <div class=\"tenant-item__text-title\">Levis</div>\n           <div class=\"tenant-item__text-description\">\n             \u041E\u0431\u0443\u0432\u044C, \u041E\u0434\u0435\u0436\u0434\u0430, \u0410\u043A\u0441\u0435\u0441\u0441\u0443\u0430\u0440\u044B\n           </div>\n         </div>\n         <div class=\"tenant-item__info-col -map\">\n           <a href=\"#\" class=\"tenant-item__map-link\">\n             \u041D\u0430 \u043A\u0430\u0440\u0442\u0435\n           </a>\n         </div>\n       </div>\n     </div>\n   </div>\n </div>\n <div class=\"tenants-grid__item tenant-item\">\n   <div class=\"tenant-item__inner\">\n     <div class=\"tenant-item__bg-wrap\">\n       <img\n         src=\"images/content/levis-bg.jpg\"\n         alt=\"\"\n         class=\"tenant-item__bg-img\"\n       />\n     </div>\n     <div class=\"tenant-item__content\">\n       <div class=\"tenant-item__logo-wrap\">\n         <img\n           src=\"images/content/levis-big-logo.jpg\"\n           alt=\"\"\n           class=\"tenant-item__logo-img\"\n         />\n       </div>\n       <div class=\"tenant-item__info\">\n         <div class=\"tenant-item__info-col -text\">\n           <div class=\"tenant-item__text-title\">Levis</div>\n           <div class=\"tenant-item__text-description\">\n             \u041E\u0431\u0443\u0432\u044C, \u041E\u0434\u0435\u0436\u0434\u0430, \u0410\u043A\u0441\u0435\u0441\u0441\u0443\u0430\u0440\u044B\n           </div>\n         </div>\n         <div class=\"tenant-item__info-col -map\">\n           <a href=\"#\" class=\"tenant-item__map-link\">\n             \u041D\u0430 \u043A\u0430\u0440\u0442\u0435\n           </a>\n         </div>\n       </div>\n     </div>\n   </div>\n </div>\n <div class=\"tenants-grid__item tenant-item\">\n <div class=\"tenant-item__inner\">\n   <div class=\"tenant-item__bg-wrap\">\n     <img\n       src=\"images/content/levis-bg.jpg\"\n       alt=\"\"\n       class=\"tenant-item__bg-img\"\n     />\n   </div>\n   <div class=\"tenant-item__content\">\n     <div class=\"tenant-item__logo-wrap\">\n       <img\n         src=\"images/content/levis-big-logo.jpg\"\n         alt=\"\"\n         class=\"tenant-item__logo-img\"\n       />\n     </div>\n     <div class=\"tenant-item__info\">\n       <div class=\"tenant-item__info-col -text\">\n         <div class=\"tenant-item__text-title\">Levis</div>\n         <div class=\"tenant-item__text-description\">\n           \u041E\u0431\u0443\u0432\u044C, \u041E\u0434\u0435\u0436\u0434\u0430, \u0410\u043A\u0441\u0435\u0441\u0441\u0443\u0430\u0440\u044B\n         </div>\n       </div>\n       <div class=\"tenant-item__info-col -map\">\n         <a href=\"#\" class=\"tenant-item__map-link\">\n           \u041D\u0430 \u043A\u0430\u0440\u0442\u0435\n         </a>\n       </div>\n     </div>\n   </div>\n </div>\n</div>\n <div class=\"tenants-grid__item tenant-item\">\n   <div class=\"tenant-item__inner\">\n     <div class=\"tenant-item__bg-wrap\">\n       <img\n         src=\"images/content/levis-bg.jpg\"\n         alt=\"\"\n         class=\"tenant-item__bg-img\"\n       />\n     </div>\n     <div class=\"tenant-item__content\">\n       <div class=\"tenant-item__logo-wrap\">\n         <img\n           src=\"images/content/levis-big-logo.jpg\"\n           alt=\"\"\n           class=\"tenant-item__logo-img\"\n         />\n       </div>\n       <div class=\"tenant-item__info\">\n         <div class=\"tenant-item__info-col -text\">\n           <div class=\"tenant-item__text-title\">Levis</div>\n           <div class=\"tenant-item__text-description\">\n             \u041E\u0431\u0443\u0432\u044C, \u041E\u0434\u0435\u0436\u0434\u0430, \u0410\u043A\u0441\u0435\u0441\u0441\u0443\u0430\u0440\u044B\n           </div>\n         </div>\n         <div class=\"tenant-item__info-col -map\">\n           <a href=\"#\" class=\"tenant-item__map-link\">\n             \u041D\u0430 \u043A\u0430\u0440\u0442\u0435\n           </a>\n         </div>\n       </div>\n     </div>\n   </div>\n </div>\n <div class=\"tenants-grid__item tenant-item -service\">\n   <div class=\"tenant-item__inner\">\n     <div class=\"tenant-item__content\">\n       <div class=\"tenant-item__service-icon\">\n         <svg\n           width=\"60\"\n           height=\"62\"\n           viewBox=\"0 0 60 62\"\n           fill=\"black\"\n           xmlns=\"http://www.w3.org/2000/svg\"\n         >\n           <path\n             fill-rule=\"evenodd\"\n             clip-rule=\"evenodd\"\n             d=\"M58 2H2V12.2295H58V2ZM0 0V14.2295H60V0H0Z\"\n           />\n           <path\n             fill-rule=\"evenodd\"\n             clip-rule=\"evenodd\"\n             d=\"M50.678 8L10 8L10 6L50.678 6L50.678 8Z\"\n           />\n           <path d=\"M13 6H48V62H13V6Z\" fill=\"#F3F3F3\" />\n           <path\n             fill-rule=\"evenodd\"\n             clip-rule=\"evenodd\"\n             d=\"M46 8H15V60H46V8ZM13 6V62H48V6H13Z\"\n           />\n           <path\n             fill-rule=\"evenodd\"\n             clip-rule=\"evenodd\"\n             d=\"M31 41.377C35.4183 41.377 39 37.7952 39 33.377C39 28.9587 35.4183 25.377 31 25.377C26.5817 25.377 23 28.9587 23 33.377C23 37.7952 26.5817 41.377 31 41.377ZM31 43.377C36.5228 43.377 41 38.8998 41 33.377C41 27.8541 36.5228 23.377 31 23.377C25.4772 23.377 21 27.8541 21 33.377C21 38.8998 25.4772 43.377 31 43.377Z\"\n           />\n         </svg>\n       </div>\n       <div class=\"tenant-item__info\">\n         <div class=\"tenant-item__info-col -text\">\n           <div class=\"tenant-item__text-title\">\u0411\u0430\u043D\u043A\u043E\u043C\u0430\u0442\u044B</div>\n           <div class=\"tenant-item__text-description\">\n             \u0414\u043B\u044F \u043F\u043E\u0441\u0435\u0442\u0438\u0442\u0435\u043B\u0435\u0439\n           </div>\n         </div>\n         <div class=\"tenant-item__info-col -map\">\n           <a href=\"#\" class=\"tenant-item__map-link\">\n             \u041D\u0430 \u043A\u0430\u0440\u0442\u0435\n           </a>\n         </div>\n       </div>\n     </div>\n   </div>\n </div>\n <div class=\"tenants-grid__item tenant-item -service\">\n   <div class=\"tenant-item__inner\">\n     <div class=\"tenant-item__content\">\n       <div class=\"tenant-item__service-icon\">\n         <svg\n           width=\"86\"\n           height=\"60\"\n           viewBox=\"0 0 86 60\"\n           fill=\"black\"\n           xmlns=\"http://www.w3.org/2000/svg\"\n         >\n           <path\n             fill-rule=\"evenodd\"\n             clip-rule=\"evenodd\"\n             d=\"M43.5 58C46.5376 58 49 55.5376 49 52.5C49 49.4624 46.5376 47 43.5 47C40.4624 47 38 49.4624 38 52.5C38 55.5376 40.4624 58 43.5 58ZM43.5 60C47.6421 60 51 56.6421 51 52.5C51 48.3579 47.6421 45 43.5 45C39.3579 45 36 48.3579 36 52.5C36 56.6421 39.3579 60 43.5 60Z\"\n           />\n           <path\n             fill-rule=\"evenodd\"\n             clip-rule=\"evenodd\"\n             d=\"M42.9993 32C39.3223 32 35.6813 32.7242 32.2842 34.1314C28.8871 35.5385 25.8004 37.601 23.2003 40.201L21.7861 38.7868C24.5719 36.001 27.8791 33.7913 31.5188 32.2836C35.1586 30.776 39.0597 30 42.9993 30C46.939 30 50.8401 30.776 54.4798 32.2836C58.1196 33.7913 61.4268 36.001 64.2125 38.7868L62.7983 40.201C60.1983 37.601 57.1116 35.5385 53.7145 34.1314C50.3174 32.7242 46.6763 32 42.9993 32Z\"\n           />\n           <path\n             fill-rule=\"evenodd\"\n             clip-rule=\"evenodd\"\n             d=\"M42.9995 17C37.3527 17 31.7611 18.1122 26.5441 20.2732C21.3271 22.4341 16.5868 25.6015 12.5939 29.5944L11.1797 28.1802C15.3583 24.0016 20.3191 20.6869 25.7787 18.4254C31.2384 16.164 37.09 15 42.9995 15C48.909 15 54.7606 16.164 60.2202 18.4254C65.6799 20.6869 70.6407 24.0016 74.8193 28.1802L73.4051 29.5944C69.4122 25.6015 64.6719 22.4341 59.4549 20.2732C54.2379 18.1122 48.6463 17 42.9995 17Z\"\n           />\n           <path\n             fill-rule=\"evenodd\"\n             clip-rule=\"evenodd\"\n             d=\"M42.9996 2C35.383 2 27.8409 3.50022 20.804 6.41499C13.7671 9.32977 7.37325 13.602 1.98746 18.9878L0.573242 17.5736C6.14476 12.0021 12.7591 7.58252 20.0386 4.56723C27.3182 1.55195 35.1203 0 42.9996 0C50.879 0 58.6811 1.55194 65.9607 4.56722C73.2402 7.58251 79.8545 12.0021 85.4261 17.5736L84.0118 18.9878C78.6261 13.602 72.2322 9.32975 65.1953 6.41498C58.1584 3.50021 50.6163 2 42.9996 2Z\"\n           />\n         </svg>\n       </div>\n       <div class=\"tenant-item__info\">\n         <div class=\"tenant-item__info-col -text\">\n           <div class=\"tenant-item__text-title\">\u0411\u0430\u043D\u043A\u043E\u043C\u0430\u0442\u044B</div>\n           <div class=\"tenant-item__text-description\">\n             \u0414\u043B\u044F \u043F\u043E\u0441\u0435\u0442\u0438\u0442\u0435\u043B\u0435\u0439\n           </div>\n         </div>\n         <div class=\"tenant-item__info-col -map\">\n           <a href=\"#\" class=\"tenant-item__map-link\">\n             \u041D\u0430 \u043A\u0430\u0440\u0442\u0435\n           </a>\n         </div>\n       </div>\n     </div>\n   </div>\n </div>\n</div>";
  var categoriesTestLayoutAdded = "\n <div class=\"tenants-grid__item tenant-item -added\">\n   <div class=\"tenant-item__inner\">\n     <div class=\"tenant-item__bg-wrap\">\n       <img\n         src=\"images/content/levis-bg.jpg\"\n         alt=\"\"\n         class=\"tenant-item__bg-img\"\n       />\n     </div>\n     <div class=\"tenant-item__content\">\n       <div class=\"tenant-item__logo-wrap\">\n         <img\n           src=\"images/content/levis-big-logo.jpg\"\n           alt=\"\"\n           class=\"tenant-item__logo-img\"\n         />\n       </div>\n       <div class=\"tenant-item__info\">\n         <div class=\"tenant-item__info-col -text\">\n           <div class=\"tenant-item__text-title\">Levis</div>\n           <div class=\"tenant-item__text-description\">\n             \u041E\u0431\u0443\u0432\u044C, \u041E\u0434\u0435\u0436\u0434\u0430, \u0410\u043A\u0441\u0435\u0441\u0441\u0443\u0430\u0440\u044B\n           </div>\n         </div>\n         <div class=\"tenant-item__info-col -map\">\n           <a href=\"#\" class=\"tenant-item__map-link\">\n             \u041D\u0430 \u043A\u0430\u0440\u0442\u0435\n           </a>\n         </div>\n       </div>\n     </div>\n   </div>\n </div>\n <div class=\"tenants-grid__item tenant-item  -added\">\n   <div class=\"tenant-item__inner\">\n     <div class=\"tenant-item__bg-wrap\">\n       <img\n         src=\"images/content/levis-bg.jpg\"\n         alt=\"\"\n         class=\"tenant-item__bg-img\"\n       />\n     </div>\n     <div class=\"tenant-item__content\">\n       <div class=\"tenant-item__logo-wrap\">\n         <img\n           src=\"images/content/levis-big-logo.jpg\"\n           alt=\"\"\n           class=\"tenant-item__logo-img\"\n         />\n       </div>\n       <div class=\"tenant-item__info\">\n         <div class=\"tenant-item__info-col -text\">\n           <div class=\"tenant-item__text-title\">Levis</div>\n           <div class=\"tenant-item__text-description\">\n             \u041E\u0431\u0443\u0432\u044C, \u041E\u0434\u0435\u0436\u0434\u0430, \u0410\u043A\u0441\u0435\u0441\u0441\u0443\u0430\u0440\u044B\n           </div>\n         </div>\n         <div class=\"tenant-item__info-col -map\">\n           <a href=\"#\" class=\"tenant-item__map-link\">\n             \u041D\u0430 \u043A\u0430\u0440\u0442\u0435\n           </a>\n         </div>\n       </div>\n     </div>\n   </div>\n </div>\n <div class=\"tenants-grid__item tenant-item  -added\">\n   <div class=\"tenant-item__inner\">\n     <div class=\"tenant-item__bg-wrap\">\n       <img\n         src=\"images/content/levis-bg.jpg\"\n         alt=\"\"\n         class=\"tenant-item__bg-img\"\n       />\n     </div>\n     <div class=\"tenant-item__content\">\n       <div class=\"tenant-item__logo-wrap\">\n         <img\n           src=\"images/content/levis-big-logo.jpg\"\n           alt=\"\"\n           class=\"tenant-item__logo-img\"\n         />\n       </div>\n       <div class=\"tenant-item__info\">\n         <div class=\"tenant-item__info-col -text\">\n           <div class=\"tenant-item__text-title\">Levis</div>\n           <div class=\"tenant-item__text-description\">\n             \u041E\u0431\u0443\u0432\u044C, \u041E\u0434\u0435\u0436\u0434\u0430, \u0410\u043A\u0441\u0435\u0441\u0441\u0443\u0430\u0440\u044B\n           </div>\n         </div>\n         <div class=\"tenant-item__info-col -map\">\n           <a href=\"#\" class=\"tenant-item__map-link\">\n             \u041D\u0430 \u043A\u0430\u0440\u0442\u0435\n           </a>\n         </div>\n       </div>\n     </div>\n   </div>\n </div>\n <div class=\"tenants-grid__item tenant-item  -added\">\n   <div class=\"tenant-item__inner\">\n     <div class=\"tenant-item__bg-wrap\">\n       <img\n         src=\"images/content/levis-bg.jpg\"\n         alt=\"\"\n         class=\"tenant-item__bg-img\"\n       />\n     </div>\n     <div class=\"tenant-item__content\">\n       <div class=\"tenant-item__logo-wrap\">\n         <img\n           src=\"images/content/levis-big-logo.jpg\"\n           alt=\"\"\n           class=\"tenant-item__logo-img\"\n         />\n       </div>\n       <div class=\"tenant-item__info\">\n         <div class=\"tenant-item__info-col -text\">\n           <div class=\"tenant-item__text-title\">Levis</div>\n           <div class=\"tenant-item__text-description\">\n             \u041E\u0431\u0443\u0432\u044C, \u041E\u0434\u0435\u0436\u0434\u0430, \u0410\u043A\u0441\u0435\u0441\u0441\u0443\u0430\u0440\u044B\n           </div>\n         </div>\n         <div class=\"tenant-item__info-col -map\">\n           <a href=\"#\" class=\"tenant-item__map-link\">\n             \u041D\u0430 \u043A\u0430\u0440\u0442\u0435\n           </a>\n         </div>\n       </div>\n     </div>\n   </div>\n </div>\n <div class=\"tenants-grid__item tenant-item  -added\">\n <div class=\"tenant-item__inner\">\n   <div class=\"tenant-item__bg-wrap\">\n     <img\n       src=\"images/content/levis-bg.jpg\"\n       alt=\"\"\n       class=\"tenant-item__bg-img\"\n     />\n   </div>\n   <div class=\"tenant-item__content\">\n     <div class=\"tenant-item__logo-wrap\">\n       <img\n         src=\"images/content/levis-big-logo.jpg\"\n         alt=\"\"\n         class=\"tenant-item__logo-img\"\n       />\n     </div>\n     <div class=\"tenant-item__info\">\n       <div class=\"tenant-item__info-col -text\">\n         <div class=\"tenant-item__text-title\">Levis</div>\n         <div class=\"tenant-item__text-description\">\n           \u041E\u0431\u0443\u0432\u044C, \u041E\u0434\u0435\u0436\u0434\u0430, \u0410\u043A\u0441\u0435\u0441\u0441\u0443\u0430\u0440\u044B\n         </div>\n       </div>\n       <div class=\"tenant-item__info-col -map\">\n         <a href=\"#\" class=\"tenant-item__map-link\">\n           \u041D\u0430 \u043A\u0430\u0440\u0442\u0435\n         </a>\n       </div>\n     </div>\n   </div>\n </div>\n</div>\n <div class=\"tenants-grid__item tenant-item  -added\">\n   <div class=\"tenant-item__inner\">\n     <div class=\"tenant-item__bg-wrap\">\n       <img\n         src=\"images/content/levis-bg.jpg\"\n         alt=\"\"\n         class=\"tenant-item__bg-img\"\n       />\n     </div>\n     <div class=\"tenant-item__content\">\n       <div class=\"tenant-item__logo-wrap\">\n         <img\n           src=\"images/content/levis-big-logo.jpg\"\n           alt=\"\"\n           class=\"tenant-item__logo-img\"\n         />\n       </div>\n       <div class=\"tenant-item__info\">\n         <div class=\"tenant-item__info-col -text\">\n           <div class=\"tenant-item__text-title\">Levis</div>\n           <div class=\"tenant-item__text-description\">\n             \u041E\u0431\u0443\u0432\u044C, \u041E\u0434\u0435\u0436\u0434\u0430, \u0410\u043A\u0441\u0435\u0441\u0441\u0443\u0430\u0440\u044B\n           </div>\n         </div>\n         <div class=\"tenant-item__info-col -map\">\n           <a href=\"#\" class=\"tenant-item__map-link\">\n             \u041D\u0430 \u043A\u0430\u0440\u0442\u0435\n           </a>\n         </div>\n       </div>\n     </div>\n   </div>\n </div>\n <div class=\"tenants-grid__item tenant-item -service  -added\">\n   <div class=\"tenant-item__inner\">\n     <div class=\"tenant-item__content\">\n       <div class=\"tenant-item__service-icon\">\n         <svg\n           width=\"60\"\n           height=\"62\"\n           viewBox=\"0 0 60 62\"\n           fill=\"black\"\n           xmlns=\"http://www.w3.org/2000/svg\"\n         >\n           <path\n             fill-rule=\"evenodd\"\n             clip-rule=\"evenodd\"\n             d=\"M58 2H2V12.2295H58V2ZM0 0V14.2295H60V0H0Z\"\n           />\n           <path\n             fill-rule=\"evenodd\"\n             clip-rule=\"evenodd\"\n             d=\"M50.678 8L10 8L10 6L50.678 6L50.678 8Z\"\n           />\n           <path d=\"M13 6H48V62H13V6Z\" fill=\"#F3F3F3\" />\n           <path\n             fill-rule=\"evenodd\"\n             clip-rule=\"evenodd\"\n             d=\"M46 8H15V60H46V8ZM13 6V62H48V6H13Z\"\n           />\n           <path\n             fill-rule=\"evenodd\"\n             clip-rule=\"evenodd\"\n             d=\"M31 41.377C35.4183 41.377 39 37.7952 39 33.377C39 28.9587 35.4183 25.377 31 25.377C26.5817 25.377 23 28.9587 23 33.377C23 37.7952 26.5817 41.377 31 41.377ZM31 43.377C36.5228 43.377 41 38.8998 41 33.377C41 27.8541 36.5228 23.377 31 23.377C25.4772 23.377 21 27.8541 21 33.377C21 38.8998 25.4772 43.377 31 43.377Z\"\n           />\n         </svg>\n       </div>\n       <div class=\"tenant-item__info\">\n         <div class=\"tenant-item__info-col -text\">\n           <div class=\"tenant-item__text-title\">\u0411\u0430\u043D\u043A\u043E\u043C\u0430\u0442\u044B</div>\n           <div class=\"tenant-item__text-description\">\n             \u0414\u043B\u044F \u043F\u043E\u0441\u0435\u0442\u0438\u0442\u0435\u043B\u0435\u0439\n           </div>\n         </div>\n         <div class=\"tenant-item__info-col -map\">\n           <a href=\"#\" class=\"tenant-item__map-link\">\n             \u041D\u0430 \u043A\u0430\u0440\u0442\u0435\n           </a>\n         </div>\n       </div>\n     </div>\n   </div>\n </div>\n <div class=\"tenants-grid__item tenant-item -service  -added\">\n   <div class=\"tenant-item__inner\">\n     <div class=\"tenant-item__content\">\n       <div class=\"tenant-item__service-icon\">\n         <svg\n           width=\"86\"\n           height=\"60\"\n           viewBox=\"0 0 86 60\"\n           fill=\"black\"\n           xmlns=\"http://www.w3.org/2000/svg\"\n         >\n           <path\n             fill-rule=\"evenodd\"\n             clip-rule=\"evenodd\"\n             d=\"M43.5 58C46.5376 58 49 55.5376 49 52.5C49 49.4624 46.5376 47 43.5 47C40.4624 47 38 49.4624 38 52.5C38 55.5376 40.4624 58 43.5 58ZM43.5 60C47.6421 60 51 56.6421 51 52.5C51 48.3579 47.6421 45 43.5 45C39.3579 45 36 48.3579 36 52.5C36 56.6421 39.3579 60 43.5 60Z\"\n           />\n           <path\n             fill-rule=\"evenodd\"\n             clip-rule=\"evenodd\"\n             d=\"M42.9993 32C39.3223 32 35.6813 32.7242 32.2842 34.1314C28.8871 35.5385 25.8004 37.601 23.2003 40.201L21.7861 38.7868C24.5719 36.001 27.8791 33.7913 31.5188 32.2836C35.1586 30.776 39.0597 30 42.9993 30C46.939 30 50.8401 30.776 54.4798 32.2836C58.1196 33.7913 61.4268 36.001 64.2125 38.7868L62.7983 40.201C60.1983 37.601 57.1116 35.5385 53.7145 34.1314C50.3174 32.7242 46.6763 32 42.9993 32Z\"\n           />\n           <path\n             fill-rule=\"evenodd\"\n             clip-rule=\"evenodd\"\n             d=\"M42.9995 17C37.3527 17 31.7611 18.1122 26.5441 20.2732C21.3271 22.4341 16.5868 25.6015 12.5939 29.5944L11.1797 28.1802C15.3583 24.0016 20.3191 20.6869 25.7787 18.4254C31.2384 16.164 37.09 15 42.9995 15C48.909 15 54.7606 16.164 60.2202 18.4254C65.6799 20.6869 70.6407 24.0016 74.8193 28.1802L73.4051 29.5944C69.4122 25.6015 64.6719 22.4341 59.4549 20.2732C54.2379 18.1122 48.6463 17 42.9995 17Z\"\n           />\n           <path\n             fill-rule=\"evenodd\"\n             clip-rule=\"evenodd\"\n             d=\"M42.9996 2C35.383 2 27.8409 3.50022 20.804 6.41499C13.7671 9.32977 7.37325 13.602 1.98746 18.9878L0.573242 17.5736C6.14476 12.0021 12.7591 7.58252 20.0386 4.56723C27.3182 1.55195 35.1203 0 42.9996 0C50.879 0 58.6811 1.55194 65.9607 4.56722C73.2402 7.58251 79.8545 12.0021 85.4261 17.5736L84.0118 18.9878C78.6261 13.602 72.2322 9.32975 65.1953 6.41498C58.1584 3.50021 50.6163 2 42.9996 2Z\"\n           />\n         </svg>\n       </div>\n       <div class=\"tenant-item__info\">\n         <div class=\"tenant-item__info-col -text\">\n           <div class=\"tenant-item__text-title\">\u0411\u0430\u043D\u043A\u043E\u043C\u0430\u0442\u044B</div>\n           <div class=\"tenant-item__text-description\">\n             \u0414\u043B\u044F \u043F\u043E\u0441\u0435\u0442\u0438\u0442\u0435\u043B\u0435\u0439\n           </div>\n         </div>\n         <div class=\"tenant-item__info-col -map\">\n           <a href=\"#\" class=\"tenant-item__map-link\">\n             \u041D\u0430 \u043A\u0430\u0440\u0442\u0435\n           </a>\n         </div>\n       </div>\n     </div>\n   </div>\n </div>\n</div>";
  var tenantsAlphabetTestLayout = "<div class=\"tenants-alphabet\">\n<div class=\"tenants-alphabet__block\">\n <div class=\"tenants-alphabet__col -letter\">\n   <div class=\"tenants-alphabet__letter\">A</div>\n </div>\n <div class=\"tenants-alphabet__col -result\">\n   <div class=\"tenants-alphabet__line\">\n     <a href=\"#\" class=\"tenants-alphabet__tenant-name\">\n       Adidas\n     </a>\n   </div>\n   <div class=\"tenants-alphabet__line\">\n     <a href=\"#\" class=\"tenants-alphabet__tenant-name\">\n       Adidas Kids\n     </a>\n     <div class=\"tenants-alphabet__tenant-sale-wrap\">\n       <div class=\"tenants-alphabet__tenant-sale\">\u0410\u043A\u0446\u0438\u044F</div>\n     </div>\n   </div>\n   <div class=\"tenants-alphabet__line\">\n     <a href=\"#\" class=\"tenants-alphabet__tenant-name\">\n       ALBIONE\n     </a>\n   </div>\n   <div class=\"tenants-alphabet__line\">\n     <a href=\"#\" class=\"tenants-alphabet__tenant-name\">\n       AMAiATOGO\n     </a>\n   </div>\n   <div class=\"tenants-alphabet__line\">\n     <a href=\"#\" class=\"tenants-alphabet__tenant-name\">\n       ARMANI EXCHANGE\n     </a>\n   </div>\n </div>\n</div>\n<div class=\"tenants-alphabet__block\">\n <div class=\"tenants-alphabet__col -letter\">\n   <div class=\"tenants-alphabet__letter\">B</div>\n </div>\n <div class=\"tenants-alphabet__col -result\">\n   <div class=\"tenants-alphabet__line\">\n     <a href=\"#\" class=\"tenants-alphabet__tenant-name\">\n       BOGGI MILANO\n     </a>\n     <div class=\"tenants-alphabet__tenant-sale-wrap\">\n       <div class=\"tenants-alphabet__tenant-sale\">\u0410\u043A\u0446\u0438\u044F</div>\n     </div>\n   </div>\n   <div class=\"tenants-alphabet__line\">\n     <a href=\"#\" class=\"tenants-alphabet__tenant-name\"\n       >BORK</a\n     >\n   </div>\n </div>\n</div>\n</div>";
  var tenantsAlphabetTestLayoutAdded = "\n<div class=\"tenants-alphabet__block  -added\">\n <div class=\"tenants-alphabet__col -letter\">\n   <div class=\"tenants-alphabet__letter\">A</div>\n </div>\n <div class=\"tenants-alphabet__col -result\">\n   <div class=\"tenants-alphabet__line\">\n     <a href=\"#\" class=\"tenants-alphabet__tenant-name\">\n       Adidas\n     </a>\n   </div>\n   <div class=\"tenants-alphabet__line\">\n     <a href=\"#\" class=\"tenants-alphabet__tenant-name\">\n       Adidas Kids\n     </a>\n     <div class=\"tenants-alphabet__tenant-sale-wrap\">\n       <div class=\"tenants-alphabet__tenant-sale\">\u0410\u043A\u0446\u0438\u044F</div>\n     </div>\n   </div>\n   <div class=\"tenants-alphabet__line\">\n     <a href=\"#\" class=\"tenants-alphabet__tenant-name\">\n       ALBIONE\n     </a>\n   </div>\n   <div class=\"tenants-alphabet__line\">\n     <a href=\"#\" class=\"tenants-alphabet__tenant-name\">\n       AMAiATOGO\n     </a>\n   </div>\n   <div class=\"tenants-alphabet__line\">\n     <a href=\"#\" class=\"tenants-alphabet__tenant-name\">\n       ARMANI EXCHANGE\n     </a>\n   </div>\n </div>\n</div>\n<div class=\"tenants-alphabet__block  -added\">\n <div class=\"tenants-alphabet__col -letter\">\n   <div class=\"tenants-alphabet__letter\">B</div>\n </div>\n <div class=\"tenants-alphabet__col -result\">\n   <div class=\"tenants-alphabet__line\">\n     <a href=\"#\" class=\"tenants-alphabet__tenant-name\">\n       BOGGI MILANO\n     </a>\n     <div class=\"tenants-alphabet__tenant-sale-wrap\">\n       <div class=\"tenants-alphabet__tenant-sale\">\u0410\u043A\u0446\u0438\u044F</div>\n     </div>\n   </div>\n   <div class=\"tenants-alphabet__line\">\n     <a href=\"#\" class=\"tenants-alphabet__tenant-name\"\n       >BORK</a\n     >\n   </div>\n </div>\n</div>";
  var eventTestLayout = " <div class=\"varied-grid\">\n  <div class=\"varied-grid__item varied-card -recommend\">\n    <div class=\"varied-card__inner\">\n      <div class=\"varied-card__bg\">\n        <img\n          src=\"images/content/compilation-1.jpg\"\n          alt=\"\"\n          class=\"varied-card__bg-img\"\n        />\n      </div>\n      <button class=\"varied-card__like\">\n        <span class=\"varied-card__like-icon\">\n          <svg\n            width=\"24\"\n            height=\"20\"\n            viewBox=\"0 0 24 20\"\n            fill=\"none\"\n            xmlns=\"http://www.w3.org/2000/svg\"\n          >\n            <path\n              fill-rule=\"evenodd\"\n              clip-rule=\"evenodd\"\n              d=\"M7.10632 0C8.86157 0 10.8051 1.00361 12 2.30769C13.1949 1.00361 15.1384 0 16.8937 0C20.595 0 24 3.07918 24 7.4508C24 14.6518 12 20 12 20C12 20 0 14.6518 0 7.4508C0 3.07918 3.40503 0 7.10632 0Z\"\n              fill=\"#E21836\"\n            />\n          </svg>\n        </span>\n        <span class=\"varied-card__like-count\">28</span>\n      </button>\n      <span class=\"varied-card__activity-name ui-btn\">\n        \u0412\u043A\u0443\u0441\u043D\u044B\u0439 \u0437\u0430\u0432\u0442\u0440\u0430\u043A\n      </span>\n      <span class=\"varied-card__activity-count\"> 12 </span>\n    </div>\n  </div>\n  <div class=\"varied-grid__item varied-card -event\">\n    <div class=\"varied-card__inner\">\n      <div class=\"varied-card__half-bg-wrap\">\n        <img\n          src=\"images/content/compilation-2.jpg\"\n          class=\"varied-card__half-bg-img\"\n        />\n        <img\n          src=\"images/content/compilation-3.jpg\"\n          class=\"varied-card__half-bg-img -hover\"\n        />\n        <div class=\"varied-card__half-bg-logo\">\n          <img\n            src=\"images/content/levis-logo.png\"\n            alt=\"\"\n            class=\"varied-card__half-bg-logo-img\"\n          />\n        </div>\n      </div>\n      <div class=\"varied-card__event-info\">\n        <div class=\"varied-card__event-info-tags\">\n          <a\n            href=\"#\"\n            class=\"varied-card__event-info-tag ui-btn -h30\"\n          >\n            \u0410\u043A\u0446\u0438\u044F\n          </a>\n          <a\n            href=\"#\"\n            class=\"varied-card__event-info-tag ui-btn -h30\"\n          >\n            Levis\n          </a>\n        </div>\n        <div class=\"varied-card__event-info-title\">\n          #denimbazaar: \u0441\u043A\u0438\u0434\u043A\u0430-50% \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u043D\u0430 \u0432\u0442\u043E\u0440\u0443\u044E \u0432\u0435\u0449\u044C\n          #denimbazaar: \u0441\u043A\u0438\u0434\u043A\u0430-50% \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u043D\u0430 \u0432\u0442\u043E\u0440\u0443\u044E \u0432\u0435\u0449\u044C\n        </div>\n        <div class=\"varied-card__event-info-date\">\n          10 \u0430\u043F\u0440 \u2012 10 \u0438\u044E\u043B\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"varied-grid__item varied-card -sale\">\n    <div class=\"varied-card__inner\">\n      <div class=\"varied-card__bg\">\n        <img\n          src=\"images/content/compilation-3.jpg\"\n          alt=\"\"\n          class=\"varied-card__bg-img\"\n        />\n        <img\n          src=\"images/content/compilation-3.jpg\"\n          class=\"varied-card__half-bg-img -hover\"\n        />\n      </div>\n      <div class=\"varied-card__sale-content\">\n        <div class=\"varied-card__sale-tags\">\n          <a\n            href=\"#\"\n            class=\"\n              varied-card__sale-tag\n              ui-btn\n              -white-border-white\n              -h30\n            \"\n          >\n            \u0421\u043A\u0438\u0434\u043A\u0430\n          </a>\n        </div>\n        <div class=\"varied-card__sale-title\">\n          \u0412 Gloria Jeans \u0421\u0443\u043F\u0435\u0440\u0441\u043A\u0438\u0434\u043A\u0438\n        </div>\n        <div class=\"varied-card__sale-subtitle\">\n          \u043E\u0442 50 \u0434\u043E 90%\n        </div>\n        <div class=\"varied-card__sale-bottom\">\n          \u041D\u0430 \u0432\u0441\u0435 \u0448\u043E\u0440\u0442\u044B \u0434\u043B\u044F \u0434\u0435\u0442\u0435\u0439 \u0438 \u0432\u0437\u0440\u043E\u0441\u043B\u044B\u0445!\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"varied-grid__item varied-card -event\">\n    <div class=\"varied-card__inner\">\n      <div class=\"varied-card__half-bg-wrap\">\n        <img\n          src=\"images/content/compilation-5.jpg\"\n          class=\"varied-card__half-bg-img\"\n        />\n        <img\n          src=\"images/content/compilation-3.jpg\"\n          class=\"varied-card__half-bg-img -hover\"\n        />\n        <div class=\"varied-card__half-bg-logo\">\n          <img\n            src=\"images/content/handm.png\"\n            alt=\"\"\n            class=\"varied-card__half-bg-logo-img\"\n          />\n        </div>\n      </div>\n      <div class=\"varied-card__event-info\">\n        <div class=\"varied-card__event-info-tags\">\n          <a\n            href=\"#\"\n            class=\"varied-card__event-info-tag ui-btn -h30\"\n          >\n            \u0421\u043A\u0438\u0434\u043A\u0430\n          </a>\n          <a\n            href=\"#\"\n            class=\"varied-card__event-info-tag ui-btn -h30\"\n          >\n            H&M\n          </a>\n        </div>\n        <div class=\"varied-card__event-info-title\">\n          #denimbazaar: \u0441\u043A\u0438\u0434\u043A\u0430-50% \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u043D\u0430 \u0432\u0442\u043E\u0440\u0443\u044E \u0432\u0435\u0449\u044C\n        </div>\n        <div class=\"varied-card__event-info-date\">\n          10 \u0430\u043F\u0440 \u2012 10 \u0438\u044E\u043B\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"varied-grid__item varied-card -recommend\">\n    <div class=\"varied-card__inner\">\n      <div class=\"varied-card__bg\">\n        <img\n          src=\"images/content/compilation-4.jpg\"\n          alt=\"\"\n          class=\"varied-card__bg-img\"\n        />\n      </div>\n      <button class=\"varied-card__like\">\n        <span class=\"varied-card__like-icon\">\n          <svg\n            width=\"24\"\n            height=\"20\"\n            viewBox=\"0 0 24 20\"\n            fill=\"none\"\n            xmlns=\"http://www.w3.org/2000/svg\"\n          >\n            <path\n              fill-rule=\"evenodd\"\n              clip-rule=\"evenodd\"\n              d=\"M7.10632 0C8.86157 0 10.8051 1.00361 12 2.30769C13.1949 1.00361 15.1384 0 16.8937 0C20.595 0 24 3.07918 24 7.4508C24 14.6518 12 20 12 20C12 20 0 14.6518 0 7.4508C0 3.07918 3.40503 0 7.10632 0Z\"\n              fill=\"#E21836\"\n            />\n          </svg>\n        </span>\n        <span class=\"varied-card__like-count\">67</span>\n      </button>\n      <span class=\"varied-card__activity-name ui-btn\">\n        \u0442\u0440\u0435\u043D\u0438\u0440\u043E\u0432\u043A\u0430\n      </span>\n      <span class=\"varied-card__activity-count\"> 35 </span>\n    </div>\n  </div>\n  <div class=\"varied-grid__item varied-card -event\">\n    <div class=\"varied-card__inner\">\n      <div class=\"varied-card__half-bg-wrap\">\n        <img\n          src=\"images/content/compilation-6.jpg\"\n          class=\"varied-card__half-bg-img\"\n        />\n        <img\n          src=\"images/content/compilation-3.jpg\"\n          class=\"varied-card__half-bg-img -hover\"\n        />\n        <div class=\"varied-card__half-bg-logo\">\n          <img\n            src=\"images/content/nike.png\"\n            alt=\"\"\n            class=\"varied-card__half-bg-logo-img\"\n          />\n        </div>\n      </div>\n      <div class=\"varied-card__event-info\">\n        <div class=\"varied-card__event-info-tags\">\n          <a\n            href=\"#\"\n            class=\"varied-card__event-info-tag ui-btn -h30\"\n          >\n            \u0421\u043A\u0438\u0434\u043A\u0430\n          </a>\n          <a\n            href=\"#\"\n            class=\"varied-card__event-info-tag ui-btn -h30\"\n          >\n            Nike\n          </a>\n        </div>\n        <div class=\"varied-card__event-info-title\">\n          #denimbazaar: \u0441\u043A\u0438\u0434\u043A\u0430-50% \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u043D\u0430 \u0432\u0442\u043E\u0440\u0443\u044E \u0432\u0435\u0449\u044C\n        </div>\n        <div class=\"varied-card__event-info-date\">\n          \u041E\u0441\u0442\u0430\u043B\u043E\u0441\u044C 5 \u0434\u043D\u0435\u0439\n        </div>\n      </div>\n    </div>\n  </div>\n</div>";
  var eventTestLayoutAdded = "\n  <div class=\"varied-grid__item varied-card -recommend -added\">\n    <div class=\"varied-card__inner\">\n      <div class=\"varied-card__bg\">\n        <img\n          src=\"images/content/compilation-1.jpg\"\n          alt=\"\"\n          class=\"varied-card__bg-img\"\n        />\n      </div>\n      <button class=\"varied-card__like\">\n        <span class=\"varied-card__like-icon\">\n          <svg\n            width=\"24\"\n            height=\"20\"\n            viewBox=\"0 0 24 20\"\n            fill=\"none\"\n            xmlns=\"http://www.w3.org/2000/svg\"\n          >\n            <path\n              fill-rule=\"evenodd\"\n              clip-rule=\"evenodd\"\n              d=\"M7.10632 0C8.86157 0 10.8051 1.00361 12 2.30769C13.1949 1.00361 15.1384 0 16.8937 0C20.595 0 24 3.07918 24 7.4508C24 14.6518 12 20 12 20C12 20 0 14.6518 0 7.4508C0 3.07918 3.40503 0 7.10632 0Z\"\n              fill=\"#E21836\"\n            />\n          </svg>\n        </span>\n        <span class=\"varied-card__like-count\">28</span>\n      </button>\n      <span class=\"varied-card__activity-name ui-btn\">\n        \u0412\u043A\u0443\u0441\u043D\u044B\u0439 \u0437\u0430\u0432\u0442\u0440\u0430\u043A\n      </span>\n      <span class=\"varied-card__activity-count\"> 12 </span>\n    </div>\n  </div>\n  <div class=\"varied-grid__item varied-card -event  -added\">\n    <div class=\"varied-card__inner\">\n      <div class=\"varied-card__half-bg-wrap\">\n        <img\n          src=\"images/content/compilation-2.jpg\"\n          class=\"varied-card__half-bg-img\"\n        />\n        <img\n          src=\"images/content/compilation-3.jpg\"\n          class=\"varied-card__half-bg-img -hover\"\n        />\n        <div class=\"varied-card__half-bg-logo\">\n          <img\n            src=\"images/content/levis-logo.png\"\n            alt=\"\"\n            class=\"varied-card__half-bg-logo-img\"\n          />\n        </div>\n      </div>\n      <div class=\"varied-card__event-info\">\n        <div class=\"varied-card__event-info-tags\">\n          <a\n            href=\"#\"\n            class=\"varied-card__event-info-tag ui-btn -h30\"\n          >\n            \u0410\u043A\u0446\u0438\u044F\n          </a>\n          <a\n            href=\"#\"\n            class=\"varied-card__event-info-tag ui-btn -h30\"\n          >\n            Levis\n          </a>\n        </div>\n        <div class=\"varied-card__event-info-title\">\n          #denimbazaar: \u0441\u043A\u0438\u0434\u043A\u0430-50% \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u043D\u0430 \u0432\u0442\u043E\u0440\u0443\u044E \u0432\u0435\u0449\u044C\n          #denimbazaar: \u0441\u043A\u0438\u0434\u043A\u0430-50% \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u043D\u0430 \u0432\u0442\u043E\u0440\u0443\u044E \u0432\u0435\u0449\u044C\n        </div>\n        <div class=\"varied-card__event-info-date\">\n          10 \u0430\u043F\u0440 \u2012 10 \u0438\u044E\u043B\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"varied-grid__item varied-card -sale  -added\">\n    <div class=\"varied-card__inner\">\n      <div class=\"varied-card__bg\">\n        <img\n          src=\"images/content/compilation-3.jpg\"\n          alt=\"\"\n          class=\"varied-card__bg-img\"\n        />\n        <img\n          src=\"images/content/compilation-3.jpg\"\n          class=\"varied-card__half-bg-img -hover\"\n        />\n      </div>\n      <div class=\"varied-card__sale-content\">\n        <div class=\"varied-card__sale-tags\">\n          <a\n            href=\"#\"\n            class=\"\n              varied-card__sale-tag\n              ui-btn\n              -white-border-white\n              -h30\n            \"\n          >\n            \u0421\u043A\u0438\u0434\u043A\u0430\n          </a>\n        </div>\n        <div class=\"varied-card__sale-title\">\n          \u0412 Gloria Jeans \u0421\u0443\u043F\u0435\u0440\u0441\u043A\u0438\u0434\u043A\u0438\n        </div>\n        <div class=\"varied-card__sale-subtitle\">\n          \u043E\u0442 50 \u0434\u043E 90%\n        </div>\n        <div class=\"varied-card__sale-bottom\">\n          \u041D\u0430 \u0432\u0441\u0435 \u0448\u043E\u0440\u0442\u044B \u0434\u043B\u044F \u0434\u0435\u0442\u0435\u0439 \u0438 \u0432\u0437\u0440\u043E\u0441\u043B\u044B\u0445!\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"varied-grid__item varied-card -event  -added\">\n    <div class=\"varied-card__inner\">\n      <div class=\"varied-card__half-bg-wrap\">\n        <img\n          src=\"images/content/compilation-5.jpg\"\n          class=\"varied-card__half-bg-img\"\n        />\n        <img\n          src=\"images/content/compilation-3.jpg\"\n          class=\"varied-card__half-bg-img -hover\"\n        />\n        <div class=\"varied-card__half-bg-logo\">\n          <img\n            src=\"images/content/handm.png\"\n            alt=\"\"\n            class=\"varied-card__half-bg-logo-img\"\n          />\n        </div>\n      </div>\n      <div class=\"varied-card__event-info\">\n        <div class=\"varied-card__event-info-tags\">\n          <a\n            href=\"#\"\n            class=\"varied-card__event-info-tag ui-btn -h30\"\n          >\n            \u0421\u043A\u0438\u0434\u043A\u0430\n          </a>\n          <a\n            href=\"#\"\n            class=\"varied-card__event-info-tag ui-btn -h30\"\n          >\n            H&M\n          </a>\n        </div>\n        <div class=\"varied-card__event-info-title\">\n          #denimbazaar: \u0441\u043A\u0438\u0434\u043A\u0430-50% \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u043D\u0430 \u0432\u0442\u043E\u0440\u0443\u044E \u0432\u0435\u0449\u044C\n        </div>\n        <div class=\"varied-card__event-info-date\">\n          10 \u0430\u043F\u0440 \u2012 10 \u0438\u044E\u043B\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"varied-grid__item varied-card -recommend  -added\">\n    <div class=\"varied-card__inner\">\n      <div class=\"varied-card__bg\">\n        <img\n          src=\"images/content/compilation-4.jpg\"\n          alt=\"\"\n          class=\"varied-card__bg-img\"\n        />\n      </div>\n      <button class=\"varied-card__like\">\n        <span class=\"varied-card__like-icon\">\n          <svg\n            width=\"24\"\n            height=\"20\"\n            viewBox=\"0 0 24 20\"\n            fill=\"none\"\n            xmlns=\"http://www.w3.org/2000/svg\"\n          >\n            <path\n              fill-rule=\"evenodd\"\n              clip-rule=\"evenodd\"\n              d=\"M7.10632 0C8.86157 0 10.8051 1.00361 12 2.30769C13.1949 1.00361 15.1384 0 16.8937 0C20.595 0 24 3.07918 24 7.4508C24 14.6518 12 20 12 20C12 20 0 14.6518 0 7.4508C0 3.07918 3.40503 0 7.10632 0Z\"\n              fill=\"#E21836\"\n            />\n          </svg>\n        </span>\n        <span class=\"varied-card__like-count\">67</span>\n      </button>\n      <span class=\"varied-card__activity-name ui-btn\">\n        \u0442\u0440\u0435\u043D\u0438\u0440\u043E\u0432\u043A\u0430\n      </span>\n      <span class=\"varied-card__activity-count\"> 35 </span>\n    </div>\n  </div>\n  <div class=\"varied-grid__item varied-card -event  -added\">\n    <div class=\"varied-card__inner\">\n      <div class=\"varied-card__half-bg-wrap\">\n        <img\n          src=\"images/content/compilation-6.jpg\"\n          class=\"varied-card__half-bg-img\"\n        />\n        <img\n          src=\"images/content/compilation-3.jpg\"\n          class=\"varied-card__half-bg-img -hover\"\n        />\n        <div class=\"varied-card__half-bg-logo\">\n          <img\n            src=\"images/content/nike.png\"\n            alt=\"\"\n            class=\"varied-card__half-bg-logo-img\"\n          />\n        </div>\n      </div>\n      <div class=\"varied-card__event-info\">\n        <div class=\"varied-card__event-info-tags\">\n          <a\n            href=\"#\"\n            class=\"varied-card__event-info-tag ui-btn -h30\"\n          >\n            \u0421\u043A\u0438\u0434\u043A\u0430\n          </a>\n          <a\n            href=\"#\"\n            class=\"varied-card__event-info-tag ui-btn -h30\"\n          >\n            Nike\n          </a>\n        </div>\n        <div class=\"varied-card__event-info-title\">\n          #denimbazaar: \u0441\u043A\u0438\u0434\u043A\u0430-50% \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u043D\u0430 \u0432\u0442\u043E\u0440\u0443\u044E \u0432\u0435\u0449\u044C\n        </div>\n        <div class=\"varied-card__event-info-date\">\n          \u041E\u0441\u0442\u0430\u043B\u043E\u0441\u044C 5 \u0434\u043D\u0435\u0439\n        </div>\n      </div>\n    </div>\n</div>";
  var emptySearch = "  <div class=\"ticker ui-section\">\n  <div class=\"wide-container\">\n    <div class=\"narrow-container\">\n      <div class=\"ticker__empty-search\">\n        <p class=\"ticker__empty-search-line\">\n          \u043F\u043E \u0432\u0430\u0448\u0435\u043C\u0443 \u0437\u0430\u043F\u0440\u043E\u0441\u0443 \u043D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E\n        </p>\n        <p class=\"ticker__empty-search-line\">\n          \u041D\u043E \u043D\u0435 \u043F\u0435\u0440\u0435\u0436\u0438\u0432\u0430\u0439\u0442\u0435, \u043D\u0430\u043C \u0435\u0441\u0442\u044C \u0447\u0442\u043E \u0432\u0430\u043C \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0438\u0442\u044C :-)\n        </p>\n      </div>\n    </div>\n  </div>\n  <div class=\"ticker__wrap\">\n    <div class=\"ticker__line\">\n      <div class=\"ticker__list -first\">\n        <div class=\"ticker__item\">\n          <button class=\"ticker__item-link\">\n            <span class=\"ticker__item-link-text\">H&M</span>\n            <span class=\"ticker__item-link-tooltip\">3 \u044D\u0442\u0430\u0436</span>\n          </button>\n        </div>\n        <div class=\"ticker__item\">\n          <button class=\"ticker__item-link\">\n            <span class=\"ticker__item-link-text\">Burberry</span>\n            <span class=\"ticker__item-link-tooltip\">3 \u044D\u0442\u0430\u0436</span>\n          </button>\n        </div>\n        <div class=\"ticker__item\">\n          <button class=\"ticker__item-link\">\n            <span class=\"ticker__item-link-text\">Catier</span>\n            <span class=\"ticker__item-link-tooltip\">3 \u044D\u0442\u0430\u0436</span>\n          </button>\n        </div>\n        <div class=\"ticker__item\">\n          <button class=\"ticker__item-link\">\n            <span class=\"ticker__item-link-text\">Puma</span>\n            <span class=\"ticker__item-link-tooltip\">3 \u044D\u0442\u0430\u0436</span>\n          </button>\n        </div>\n        <div class=\"ticker__item\">\n          <button class=\"ticker__item-link\">\n            <span class=\"ticker__item-link-text\">Timberland</span>\n            <span class=\"ticker__item-link-tooltip\">3 \u044D\u0442\u0430\u0436</span>\n          </button>\n        </div>\n      </div>\n      <div class=\"ticker__list\">\n        <div class=\"ticker__item\">\n          <button class=\"ticker__item-link\">\n            <span class=\"ticker__item-link-text\">H&M</span>\n            <span class=\"ticker__item-link-tooltip\">3 \u044D\u0442\u0430\u0436</span>\n          </button>\n        </div>\n        <div class=\"ticker__item\">\n          <button class=\"ticker__item-link\">\n            <span class=\"ticker__item-link-text\">Burberry</span>\n            <span class=\"ticker__item-link-tooltip\">3 \u044D\u0442\u0430\u0436</span>\n          </button>\n        </div>\n        <div class=\"ticker__item\">\n          <button class=\"ticker__item-link\">\n            <span class=\"ticker__item-link-text\">Catier</span>\n            <span class=\"ticker__item-link-tooltip\">3 \u044D\u0442\u0430\u0436</span>\n          </button>\n        </div>\n        <div class=\"ticker__item\">\n          <button class=\"ticker__item-link\">\n            <span class=\"ticker__item-link-text\">Puma</span>\n            <span class=\"ticker__item-link-tooltip\">3 \u044D\u0442\u0430\u0436</span>\n          </button>\n        </div>\n        <div class=\"ticker__item\">\n          <button class=\"ticker__item-link\">\n            <span class=\"ticker__item-link-text\">Timberland</span>\n            <span class=\"ticker__item-link-tooltip\">3 \u044D\u0442\u0430\u0436</span>\n          </button>\n        </div>\n      </div>\n    </div>\n    <div class=\"ticker__line -reverse\">\n      <div class=\"ticker__list -first\">\n        <div class=\"ticker__item\">\n          <button class=\"ticker__item-link\">\n            <span class=\"ticker__item-link-text\">H&M</span>\n            <span class=\"ticker__item-link-tooltip\">3 \u044D\u0442\u0430\u0436</span>\n          </button>\n        </div>\n        <div class=\"ticker__item\">\n          <button class=\"ticker__item-link\">\n            <span class=\"ticker__item-link-text\">Burberry</span>\n            <span class=\"ticker__item-link-tooltip\">3 \u044D\u0442\u0430\u0436</span>\n          </button>\n        </div>\n        <div class=\"ticker__item\">\n          <button class=\"ticker__item-link\">\n            <span class=\"ticker__item-link-text\">Catier</span>\n            <span class=\"ticker__item-link-tooltip\">3 \u044D\u0442\u0430\u0436</span>\n          </button>\n        </div>\n        <div class=\"ticker__item\">\n          <button class=\"ticker__item-link\">\n            <span class=\"ticker__item-link-text\">Puma</span>\n            <span class=\"ticker__item-link-tooltip\">3 \u044D\u0442\u0430\u0436</span>\n          </button>\n        </div>\n        <div class=\"ticker__item\">\n          <button class=\"ticker__item-link\">\n            <span class=\"ticker__item-link-text\">Timberland</span>\n            <span class=\"ticker__item-link-tooltip\">3 \u044D\u0442\u0430\u0436</span>\n          </button>\n        </div>\n      </div>\n      <div class=\"ticker__list\">\n        <div class=\"ticker__item\">\n          <button class=\"ticker__item-link\">\n            <span class=\"ticker__item-link-text\">H&M</span>\n            <span class=\"ticker__item-link-tooltip\">3 \u044D\u0442\u0430\u0436</span>\n          </button>\n        </div>\n        <div class=\"ticker__item\">\n          <button class=\"ticker__item-link\">\n            <span class=\"ticker__item-link-text\">Burberry</span>\n            <span class=\"ticker__item-link-tooltip\">3 \u044D\u0442\u0430\u0436</span>\n          </button>\n        </div>\n        <div class=\"ticker__item\">\n          <button class=\"ticker__item-link\">\n            <span class=\"ticker__item-link-text\">Catier</span>\n            <span class=\"ticker__item-link-tooltip\">3 \u044D\u0442\u0430\u0436</span>\n          </button>\n        </div>\n        <div class=\"ticker__item\">\n          <button class=\"ticker__item-link\">\n            <span class=\"ticker__item-link-text\">Puma</span>\n            <span class=\"ticker__item-link-tooltip\">3 \u044D\u0442\u0430\u0436</span>\n          </button>\n        </div>\n        <div class=\"ticker__item\">\n          <button class=\"ticker__item-link\">\n            <span class=\"ticker__item-link-text\">Timberland</span>\n            <span class=\"ticker__item-link-tooltip\">3 \u044D\u0442\u0430\u0436</span>\n          </button>\n        </div>\n      </div>\n    </div>\n    <div class=\"ticker__line\">\n      <div class=\"ticker__list -first\">\n        <div class=\"ticker__item\">\n          <button class=\"ticker__item-link\">\n            <span class=\"ticker__item-link-text\">H&M</span>\n            <span class=\"ticker__item-link-tooltip\">3 \u044D\u0442\u0430\u0436</span>\n          </button>\n        </div>\n        <div class=\"ticker__item\">\n          <button class=\"ticker__item-link\">\n            <span class=\"ticker__item-link-text\">Burberry</span>\n            <span class=\"ticker__item-link-tooltip\">3 \u044D\u0442\u0430\u0436</span>\n          </button>\n        </div>\n        <div class=\"ticker__item\">\n          <button class=\"ticker__item-link\">\n            <span class=\"ticker__item-link-text\">Catier</span>\n            <span class=\"ticker__item-link-tooltip\">3 \u044D\u0442\u0430\u0436</span>\n          </button>\n        </div>\n        <div class=\"ticker__item\">\n          <button class=\"ticker__item-link\">\n            <span class=\"ticker__item-link-text\">Puma</span>\n            <span class=\"ticker__item-link-tooltip\">3 \u044D\u0442\u0430\u0436</span>\n          </button>\n        </div>\n        <div class=\"ticker__item\">\n          <button class=\"ticker__item-link\">\n            <span class=\"ticker__item-link-text\">Timberland</span>\n            <span class=\"ticker__item-link-tooltip\">3 \u044D\u0442\u0430\u0436</span>\n          </button>\n        </div>\n      </div>\n      <div class=\"ticker__list\">\n        <div class=\"ticker__item\">\n          <button class=\"ticker__item-link\">\n            <span class=\"ticker__item-link-text\">H&M</span>\n            <span class=\"ticker__item-link-tooltip\">3 \u044D\u0442\u0430\u0436</span>\n          </button>\n        </div>\n        <div class=\"ticker__item\">\n          <button class=\"ticker__item-link\">\n            <span class=\"ticker__item-link-text\">Burberry</span>\n            <span class=\"ticker__item-link-tooltip\">3 \u044D\u0442\u0430\u0436</span>\n          </button>\n        </div>\n        <div class=\"ticker__item\">\n          <button class=\"ticker__item-link\">\n            <span class=\"ticker__item-link-text\">Catier</span>\n            <span class=\"ticker__item-link-tooltip\">3 \u044D\u0442\u0430\u0436</span>\n          </button>\n        </div>\n        <div class=\"ticker__item\">\n          <button class=\"ticker__item-link\">\n            <span class=\"ticker__item-link-text\">Puma</span>\n            <span class=\"ticker__item-link-tooltip\">3 \u044D\u0442\u0430\u0436</span>\n          </button>\n        </div>\n        <div class=\"ticker__item\">\n          <button class=\"ticker__item-link\">\n            <span class=\"ticker__item-link-text\">Timberland</span>\n            <span class=\"ticker__item-link-tooltip\">3 \u044D\u0442\u0430\u0436</span>\n          </button>\n        </div>\n      </div>\n    </div>\n    <div class=\"ticker__line -reverse\">\n      <div class=\"ticker__list -first\">\n        <div class=\"ticker__item\">\n          <button class=\"ticker__item-link\">\n            <span class=\"ticker__item-link-text\">H&M</span>\n            <span class=\"ticker__item-link-tooltip\">3 \u044D\u0442\u0430\u0436</span>\n          </button>\n        </div>\n        <div class=\"ticker__item\">\n          <button class=\"ticker__item-link\">\n            <span class=\"ticker__item-link-text\">Burberry</span>\n            <span class=\"ticker__item-link-tooltip\">3 \u044D\u0442\u0430\u0436</span>\n          </button>\n        </div>\n        <div class=\"ticker__item\">\n          <button class=\"ticker__item-link\">\n            <span class=\"ticker__item-link-text\">Catier</span>\n            <span class=\"ticker__item-link-tooltip\">3 \u044D\u0442\u0430\u0436</span>\n          </button>\n        </div>\n        <div class=\"ticker__item\">\n          <button class=\"ticker__item-link\">\n            <span class=\"ticker__item-link-text\">Puma</span>\n            <span class=\"ticker__item-link-tooltip\">3 \u044D\u0442\u0430\u0436</span>\n          </button>\n        </div>\n        <div class=\"ticker__item\">\n          <button class=\"ticker__item-link\">\n            <span class=\"ticker__item-link-text\">Timberland</span>\n            <span class=\"ticker__item-link-tooltip\">3 \u044D\u0442\u0430\u0436</span>\n          </button>\n        </div>\n      </div>\n      <div class=\"ticker__list\">\n        <div class=\"ticker__item\">\n          <button class=\"ticker__item-link\">\n            <span class=\"ticker__item-link-text\">H&M</span>\n            <span class=\"ticker__item-link-tooltip\">3 \u044D\u0442\u0430\u0436</span>\n          </button>\n        </div>\n        <div class=\"ticker__item\">\n          <button class=\"ticker__item-link\">\n            <span class=\"ticker__item-link-text\">Burberry</span>\n            <span class=\"ticker__item-link-tooltip\">3 \u044D\u0442\u0430\u0436</span>\n          </button>\n        </div>\n        <div class=\"ticker__item\">\n          <button class=\"ticker__item-link\">\n            <span class=\"ticker__item-link-text\">Catier</span>\n            <span class=\"ticker__item-link-tooltip\">3 \u044D\u0442\u0430\u0436</span>\n          </button>\n        </div>\n        <div class=\"ticker__item\">\n          <button class=\"ticker__item-link\">\n            <span class=\"ticker__item-link-text\">Puma</span>\n            <span class=\"ticker__item-link-tooltip\">3 \u044D\u0442\u0430\u0436</span>\n          </button>\n        </div>\n        <div class=\"ticker__item\">\n          <button class=\"ticker__item-link\">\n            <span class=\"ticker__item-link-text\">Timberland</span>\n            <span class=\"ticker__item-link-tooltip\">3 \u044D\u0442\u0430\u0436</span>\n          </button>\n        </div>\n      </div>\n    </div>\n    <div class=\"ticker__line\">\n      <div class=\"ticker__list -first\">\n        <div class=\"ticker__item\">\n          <button class=\"ticker__item-link\">\n            <span class=\"ticker__item-link-text\">H&M</span>\n            <span class=\"ticker__item-link-tooltip\">3 \u044D\u0442\u0430\u0436</span>\n          </button>\n        </div>\n        <div class=\"ticker__item\">\n          <button class=\"ticker__item-link\">\n            <span class=\"ticker__item-link-text\">Burberry</span>\n            <span class=\"ticker__item-link-tooltip\">3 \u044D\u0442\u0430\u0436</span>\n          </button>\n        </div>\n        <div class=\"ticker__item\">\n          <button class=\"ticker__item-link\">\n            <span class=\"ticker__item-link-text\">Catier</span>\n            <span class=\"ticker__item-link-tooltip\">3 \u044D\u0442\u0430\u0436</span>\n          </button>\n        </div>\n        <div class=\"ticker__item\">\n          <button class=\"ticker__item-link\">\n            <span class=\"ticker__item-link-text\">Puma</span>\n            <span class=\"ticker__item-link-tooltip\">3 \u044D\u0442\u0430\u0436</span>\n          </button>\n        </div>\n        <div class=\"ticker__item\">\n          <button class=\"ticker__item-link\">\n            <span class=\"ticker__item-link-text\">Timberland</span>\n            <span class=\"ticker__item-link-tooltip\">3 \u044D\u0442\u0430\u0436</span>\n          </button>\n        </div>\n      </div>\n      <div class=\"ticker__list\">\n        <div class=\"ticker__item\">\n          <button class=\"ticker__item-link\">\n            <span class=\"ticker__item-link-text\">H&M</span>\n            <span class=\"ticker__item-link-tooltip\">3 \u044D\u0442\u0430\u0436</span>\n          </button>\n        </div>\n        <div class=\"ticker__item\">\n          <button class=\"ticker__item-link\">\n            <span class=\"ticker__item-link-text\">Burberry</span>\n            <span class=\"ticker__item-link-tooltip\">3 \u044D\u0442\u0430\u0436</span>\n          </button>\n        </div>\n        <div class=\"ticker__item\">\n          <button class=\"ticker__item-link\">\n            <span class=\"ticker__item-link-text\">Catier</span>\n            <span class=\"ticker__item-link-tooltip\">3 \u044D\u0442\u0430\u0436</span>\n          </button>\n        </div>\n        <div class=\"ticker__item\">\n          <button class=\"ticker__item-link\">\n            <span class=\"ticker__item-link-text\">Puma</span>\n            <span class=\"ticker__item-link-tooltip\">3 \u044D\u0442\u0430\u0436</span>\n          </button>\n        </div>\n        <div class=\"ticker__item\">\n          <button class=\"ticker__item-link\">\n            <span class=\"ticker__item-link-text\">Timberland</span>\n            <span class=\"ticker__item-link-tooltip\">3 \u044D\u0442\u0430\u0436</span>\n          </button>\n        </div>\n      </div>\n    </div>\n    <a href=\"#\" class=\"ticker__map-link\"> \u041D\u0430 \u043A\u0430\u0440\u0442\u0435 </a>\n  </div>\n</div>";
  var tenantsCategoriesBtns = document.querySelectorAll(".tenants-categories__btn");
  var tenantsResult = document.querySelector(".tenants-result");

  if (tenantsCategoriesBtns.length) {
    tenantsCategoriesBtns.forEach(function (button) {
      button.addEventListener("click", function (event) {
        tenantsCategoriesBtns.forEach(function (element) {
          element.classList.remove("-current");
        });
        event.target.closest(".tenants-categories__btn").classList.add("-current");
        event.target.closest(".tenants-categories").querySelector(".tenants-mobile-filter__dropdown").classList.remove("-active");
        event.target.closest(".tenants-categories__list-wrap").classList.remove("-active");
        updateResults(newResults);
        setTimeout(function () {
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

  var tenantsViewFilterInputs = document.querySelectorAll(".tenants-view__filter-input");

  if (tenantsViewFilterInputs.length) {
    tenantsViewFilterInputs.forEach(function (input) {
      input.addEventListener("change", function () {
        updateResults(newResults);
      });
    });
  }

  function updateResults(newResults) {
    var durationDown = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.2;
    var DurationUp = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0.3;
    gsap.to(tenantsResult, {
      opacity: 0,
      y: 100,
      duration: durationDown
    });
    setTimeout(function () {
      // здесь получаем новую разметку
      tenantsResult.querySelector(".tenants-result__inner").innerHTML = "";
      tenantsResult.querySelector(".tenants-result__inner").innerHTML = newResults;
      gsap.to(tenantsResult, {
        opacity: 1,
        y: 0,
        duration: DurationUp
      });
    }, 300);
  }

  function updateResultsInstant(newResults) {
    tenantsResult.querySelector(".tenants-result__inner").innerHTML = "";
    tenantsResult.querySelector(".tenants-result__inner").innerHTML = newResults;
  } // для тестирования


  var newResults = categoriesTestLayout;
  var newResultsAdded = categoriesTestLayoutAdded;

  if (document.querySelector(".tenants-filter-area.-event")) {
    newResults = eventTestLayout;
    newResultsAdded = eventTestLayoutAdded;
  }

  var tenantsViewViewTypeInputs = document.querySelectorAll(".tenants-view__view-type-input");

  if (tenantsViewViewTypeInputs.length) {
    tenantsViewViewTypeInputs.forEach(function (input) {
      input.addEventListener("change", function (event) {
        if (event.target.value === "list") {
          newResults = tenantsAlphabetTestLayout;
          newResultsAdded = tenantsAlphabetTestLayoutAdded;
          document.querySelector(".tenants-result").classList.add("-alphabet");
        } else {
          newResults = categoriesTestLayout;
          newResultsAdded = categoriesTestLayoutAdded;
          document.querySelector(".tenants-result").classList.remove("-alphabet");
        }

        document.querySelectorAll(".tenants-mobile-filter__view-btn, .tenants-view.-mobile").forEach(function (element) {
          element.classList.remove("-active");
        });
        updateResults(newResults);
        setTimeout(function () {
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

  var tenantsSectionBtns = document.querySelectorAll(".tenants-section__btn");
  var tenantsFilterArea = document.querySelector(".tenants-filter-area");
  var tenantsView = document.querySelector(".tenants-view:not(.-mobile)");

  if (tenantsSectionBtns.length) {
    tenantsSectionBtns.forEach(function (button) {
      button.addEventListener("click", function (event) {
        var tabId = event.target.dataset.tab;
        tenantsSectionBtns.forEach(function (element) {
          element.classList.remove("-current");
        });
        event.target.classList.add("-current");
        console.log(event.target);
        event.target.blur();
        gsap.to(tenantsResult, {
          opacity: 0,
          y: 100,
          duration: 0.4
        });
        gsap.to(tenantsFilterArea, {
          opacity: 0,
          y: 100,
          duration: 0.4
        });
        gsap.to(tenantsView, {
          opacity: 0,
          y: 100,
          duration: 0.4
        });
        var filterSections = tenantsFilterArea.querySelectorAll("[data-tab]"); // получаем новую разметку, если необходимо

        setTimeout(function () {
          filterSections.forEach(function (section) {
            if (section.dataset.tab === tabId) {
              section.classList.add("-current");

              if (!section.classList.contains("tenants-search")) {
                if (document.querySelector(".tenants-view__view-type-input:checked").value === "cards") {
                  document.querySelectorAll(".tenants-view__view-type-input:checked").forEach(function (element) {
                    element.checked = false;
                  });
                  section.querySelector('.tenants-view__view-type-input[value="cards"]').checked = true;
                } else {
                  document.querySelectorAll(".tenants-view__view-type-input:checked").forEach(function (element) {
                    element.checked = false;
                  });
                  section.querySelector('.tenants-view__view-type-input[value="list"]').checked = true;
                }
              }
            } else {
              section.classList.remove("-current");
            }
          });

          switch (tabId) {
            case "categories":
              updateResultsInstant(newResults);
              setTimeout(function () {
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
              setTimeout(function () {
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
              tenantsResult.querySelector(".tenants-result__inner").innerHTML = "";
              loadMore.pause();
              document.querySelector(".tenants-result__loading").classList.remove("-visible");
              break;

            default:
              tenantsResult.querySelector(".tenants-result__inner").innerHTML = "";
              break;
          }

          gsap.to(tenantsResult, {
            opacity: 1,
            y: 0,
            duration: 0.4,
            onComplete: function onComplete() {}
          });
          gsap.to(tenantsFilterArea, {
            opacity: 1,
            y: 0,
            duration: 0.4
          });
          gsap.to(tenantsView, {
            opacity: 1,
            y: 0,
            duration: 0.4
          });
        }, 400);
      });
    });
  }

  function getTextWidth(textToCalc) {
    var text = document.createElement("span");
    text.style.position = "absolute";
    text.style.top = "-9999px";
    text.style.left = "-9999px";
    text.style.visibility = "hidden";
    text.style.opacity = 0;
    document.body.appendChild(text);
    text.style.font = "RF Dewi";

    if (window.innerWidth > 759) {
      text.style.fontSize = "".concat(48, "px");
    } else {
      text.style.fontSize = "".concat(24, "px");
    }

    text.style.height = "auto";
    text.style.width = "auto";
    text.style.whiteSpace = "no-wrap";
    text.innerHTML = textToCalc;
    var width = Math.ceil(text.clientWidth);
    return width;
  }

  var loadMore;
  var isLoadMoreActive = false;
  var pages = 3;
  var tenantsSearchInput = document.querySelector(".tenants-search__input");
  var tenantsSearchLoading = document.querySelector(".tenants-search__loading");

  if (tenantsSearchInput) {
    var searchTimer;
    tenantsSearchInput.addEventListener("input", function () {
      tenantsSearchLoading.classList.remove("-visible");
      clearTimeout(searchTimer);

      if (this.value) {
        var value = this.value;
        searchTimer = setTimeout(function () {
          if (window.innerWidth > 759) {
            tenantsSearchLoading.style.left = "".concat(getTextWidth(value) + 48, "px");
          } else {
            tenantsSearchLoading.style.left = "".concat(getTextWidth(value) + 28, "px");
          }

          tenantsSearchLoading.classList.add("-visible");
          setTimeout(function () {
            updateResults(emptySearch); // подставить бегущие строки

            console.log(document.querySelector(".tenants-view__filter"));
            document.querySelectorAll(".tenants-view__filter").forEach(function (element) {
              element.classList.add("-disabled");
            });
            document.querySelector(".tenants-result").classList.add("-search-empty");
            setTimeout(function () {
              var tickerLines = document.querySelectorAll(".ticker__line");
              var isIE11 = !!window.MSInputMethodContext && !!document.documentMode;

              function getTranslateX(myElement) {
                var style = window.getComputedStyle(myElement);
                var matrix = window.WebKitCSSMatrix ? new WebKitCSSMatrix(style.transform) : CSSMatrix(style.transform);
                return matrix.m41;
              }

              function checkOffset() {
                tickerLines.forEach(function (element) {
                  var tickerList = element.lastElementChild;
                  var translateX = getTranslateX(tickerList);
                  var tickerListWidth = tickerList.offsetWidth;

                  if (!element.classList.contains("-reverse") && translateX < window.innerWidth - tickerListWidth || element.classList.contains("-reverse") && translateX > 0) {
                    var clone = tickerList.cloneNode(true);
                    element.append(clone);
                    element.removeChild(element.firstChild);
                  }
                });
                window.requestAnimationFrame(checkOffset);
              }

              if (tickerLines.length && !isIE11) {
                window.requestAnimationFrame(checkOffset);
                var tickerItemLinks = document.querySelectorAll(".ticker__item-link");
                document.addEventListener("mouseover", function (event) {
                  if (event.target.closest(".ticker__item-link")) {
                    event.target.closest(".ticker__line").classList.add("js-hover");
                  }
                });
                document.addEventListener("mouseout", function (event) {
                  if (event.target.closest(".ticker__item-link")) {
                    event.target.closest(".ticker__line").classList.remove("js-hover");
                  }
                });
                document.querySelectorAll(".ticker__line").forEach(function (element) {
                  element.classList.add("js-hover");
                  setTimeout(function () {
                    element.classList.remove("js-hover");
                  });
                });
              }
            }, 500); // подставить бегущие строки

            tenantsSearchLoading.classList.remove("-visible");
            setTimeout(function () {
              pages = 5;

              if (document.querySelector(".-only-search") && isLoadMoreActive === false) {
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
        onEnter: function onEnter() {
          document.querySelector(".tenants-result__loading").classList.add("-visible");
          setTimeout(function () {
            if (document.querySelector(".tenants-grid")) {
              tenantsResult.querySelector(".tenants-grid").insertAdjacentHTML("beforeend", newResultsAdded);
            } else if (document.querySelector(".tenants-alphabet")) {
              tenantsResult.querySelector(".tenants-alphabet").insertAdjacentHTML("beforeend", newResultsAdded);
            } else if (document.querySelector(".varied-grid")) {
              tenantsResult.querySelector(".varied-grid").insertAdjacentHTML("beforeend", newResultsAdded);
            }

            document.querySelector(".tenants-result__loading").classList.remove("-visible");
            gsap.to([".tenant-item.-added", ".tenants-alphabet__block.-added", ".varied-card.-added"], {
              opacity: 1,
              y: 0,
              duration: 0.3,
              onComplete: function onComplete() {
                document.querySelectorAll(".tenant-item.-added, .tenants-alphabet__block.-added, .varied-card.-added").forEach(function (element) {
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
              }
            });
          }, 2000);
        }
      }
    });
  }

  if (!document.querySelector(".-only-search")) {
    setLoadMore();
  }
});