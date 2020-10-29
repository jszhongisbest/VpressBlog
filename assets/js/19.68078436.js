(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{387:function(e,t,s){"use strict";s.r(t);var a=s(8),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"_22-vuepress-theme-主題結構"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_22-vuepress-theme-主題結構"}},[e._v("#")]),e._v(" 22. VuePress theme 主題結構")]),e._v(" "),s("h1",{attrs:{id:"vuepress-theme-主題結構"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-theme-主題結構"}},[e._v("#")]),e._v(" VuePress theme 主題結構")]),e._v(" "),s("p",[e._v("上一篇說明了 Layout 的概念其實就已經可以達成一定程度的客製化了，但人都是貪婪的，光靠簡單的 Layout 切換我想很難滿足實際上的需求對吧？")]),e._v(" "),s("p",[e._v("而且如果網站複雜度提高之後，也免不了要將畫面中的元件進行切割劃分，切割成 component 的形式，今天就來討論主題中「約定」好的目錄結構吧。")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("theme\n├── global-components\n│   └── xxx.vue\n├── components\n│   └── xxx.vue\n├── layouts\n│   ├── Layout.vue (必要)\n│   └── NotFound.vue\n├── styles\n│   ├── index.styl\n│   └── palette.styl\n├── templates\n│   ├── dev.html\n│   └── ssr.html\n├── index.js\n├── enhanceApp.js\n└── package.json\n")])])]),s("blockquote",[s("p",[e._v("目錄結構的範例，其中只有 "),s("code",[e._v("layout/Layout.vue")]),e._v(" 是必要的，其他都是可選。")])]),e._v(" "),s("hr"),e._v(" "),s("h2",{attrs:{id:"目錄結構"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#目錄結構"}},[e._v("#")]),e._v(" "),s("strong",[e._v("目錄結構")])]),e._v(" "),s("ul",[s("li",[s("p",[s("code",[e._v("theme/global-components")])]),e._v(" "),s("p",[e._v("存放在這個目錄下的所有 "),s("code",[e._v(".vue")]),e._v(" 組件都會變成全域組件喔，最主要的應用情境是可以將一些重複性非常高，像是 "),s("code",[e._v("vInput.vue")]),e._v(" 等的組件放在這邊，這樣在其他組件中需要使用時就可以直接在 "),s("code",[e._v("<template />")]),e._v(" 中使用，不需要額外的引入，也可以在 "),s("code",[e._v(".md")]),e._v(" 中直接進行使用喔！")]),e._v(" "),s("blockquote",[s("p",[e._v("延伸閱讀： "),s("strong",[s("a",{attrs:{href:"https://github.com/vuejs/vuepress/tree/master/packages/@vuepress/plugin-register-components",target:"_blank",rel:"noopener noreferrer"}},[e._v("@vuepress/plugin-register-components"),s("OutboundLink")],1)]),e._v("。")])])]),e._v(" "),s("li",[s("p",[s("code",[e._v("theme/components")])]),e._v(" "),s("p",[e._v("用以儲存主題中各種 "),s("code",[e._v(".vue")]),e._v(" 組件的目錄，不過就不像 "),s("code",[e._v("theme/global-components")]),e._v(" 有特殊的註冊處理了，需要使用時要各別 "),s("code",[e._v("import")]),e._v("。")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("theme/layouts")])]),e._v(" "),s("p",[e._v("Layout 版型的組件目錄，前面已經有介紹過了，要注意 "),s("code",[e._v("Layout.vue")]),e._v(" 是主題的必要組件。")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("theme/styles")])]),e._v(" "),s("p",[e._v("有約定兩個檔案，分別是 "),s("code",[e._v("index.styl")]),e._v(" 與 "),s("code",[e._v("palette.styl")]),e._v(" ，都是使用 "),s("code",[e._v("Stylus")]),e._v(" 的格式來進行撰寫，不過不用擔心， "),s("code",[e._v("Stylus")]),e._v(" 的樣式文件也是可以直接寫一般的 CSS 。")]),e._v(" "),s("ol",[s("li",[s("p",[s("code",[e._v("index.styl")]),e._v(" ：可以將全域套用的 CSS 寫在這邊。")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("palette.styl")]),e._v(" ：透過這個檔案來進行 CSS 變數的定義， VuePress 也有約定相關的變數名稱與預設值，如下：")]),e._v(" "),s("div",{staticClass:"language-scss extra-class"},[s("pre",{pre:!0,attrs:{class:"language-scss"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// 顏色")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$accentColor")]),e._v(" = #3eaf7c\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$textColor")]),e._v(" = #2c3e50\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$borderColor")]),e._v(" = #eaecef\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$codeBgColor")]),e._v(" = #282c34\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$arrowBgColor")]),e._v(" = #ccc\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$badgeTipColor")]),e._v(" = #42b983\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$badgeWarningColor")]),e._v(" = "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("darken")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("#ffe564"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" 35%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$badgeErrorColor")]),e._v(" = #DA5961\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// 佈局")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$navbarHeight")]),e._v(" = 3.6rem\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$sidebarWidth")]),e._v(" = 20rem\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$contentWidth")]),e._v(" = 740px\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$homePageWidth")]),e._v(" = 960px\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// 響應式變化點")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$MQNarrow")]),e._v(" = 959px\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$MQMobile")]),e._v(" = 719px\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$MQMobileNarrow")]),e._v(" = 419px\n")])])])])])]),e._v(" "),s("li",[s("p",[s("code",[e._v("templates")]),e._v("：存儲 HTML 模板的文件，沒有必要的話不用改動。")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("dev.html")]),e._v("：可以複寫開發環境的 HTML 模板文件。")]),e._v(" "),s("li",[s("code",[e._v("ssr.html")]),e._v("：可以複寫最終編譯結果的 HTML 模板文件。")])])])]),e._v(" "),s("hr"),e._v(" "),s("h2",{attrs:{id:"theme-index-js-與-theme-enhanceapp-js"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#theme-index-js-與-theme-enhanceapp-js"}},[e._v("#")]),e._v(" "),s("code",[e._v("theme/index.js")]),e._v(" 與 "),s("code",[e._v("theme/enhanceApp.js")])]),e._v(" "),s("p",[e._v("不知道你有沒有注意到，上面的說明中並沒有提到這 "),s("code",[e._v("theme/index.js")]),e._v(" 與 "),s("code",[e._v("theme/enhanceApp.js")]),e._v(" 呢？")]),e._v(" "),s("p",[e._v("其實是這兩個檔案的觀念比較進階一些，就留待下一篇再來說明囉！")]),e._v(" "),s("hr"),e._v(" "),s("h2",{attrs:{id:"使用-npm-主題須確認是否有-theme-index-js"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-npm-主題須確認是否有-theme-index-js"}},[e._v("#")]),e._v(" 使用 "),s("code",[e._v("npm")]),e._v(" 主題須確認是否有 "),s("code",[e._v("theme/index.js")])]),e._v(" "),s("p",[e._v("最後要注意一下，如果使用 "),s("code",[e._v("npm")]),e._v(" 下載主題，又或者你將自己設置的主題發佈到 "),s("code",[e._v("npm")]),e._v(" 來進行使用的話，就要確認這個主題中是否有 "),s("code",[e._v("theme/index.js")]),e._v(" 這個主題配置檔喔，如果沒有的話就要記得在 "),s("code",[e._v("package.json")]),e._v(" 中設置 "),s("code",[e._v('"main": "layouts/Layout.vue",')]),e._v("這個屬性，這樣 VuePress 才有辦法正確的編譯主題。")]),e._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// package.json 範例")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n\t"),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"demo-blog"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"version"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"1.0.0"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n\t"),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"main"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"layouts/Layout.vue"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);