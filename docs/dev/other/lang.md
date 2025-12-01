# 多语言、国际化

## 后端多语言

php：[ThinkPHP8 多语言](https://doc.thinkphp.cn/v8_0/lang.html)

### 后端语言包

app/lang/zh-cn.php

```php
'会员管理' => '会员管理'
```

app/lang/en.php

```php
'会员管理' => 'Member'
```

### 后端使用多语言

```php
lang('会员管理');
```

### 后端配置

.env

```txt
[LANG]
# 默认语言：
default_lang = zh-cn
```

## 前端多语言

vue：[Vue I18n](https://vue-i18n.intlify.dev/)

### 前端语言包

src/lang/package/zh-cn.json

```json
  会员管理: "会员管理"
```

src/lang/package/en.json

```json
  会员管理: "Member"
```

### 前端多语言使用

```js
import i18n from "@/lang/index";
i18n.global.t("会员管理");
```

```vue
<template>
  <el-text>{{ $t("会员管理") }}</el-text>
  <el-form-item :label="$t("会员管理")">
    <el-input v-model="input" />
  </el-form-item>
</template>
<script>
export default {
  data() {
    return {
      name: "",
      input: "",
    };
  },
  created() {
    this.name = this.$t("会员管理");
  },
};
</script>
```

### 前端配置

src/settings.js

```js
language: 'zh-cn',
```

### 前端切换语言

前端切换语言后，需要在请求头部或请求参数中带上语言变量。  
后端会根据前端请求参数或请求头部的语言变量自动侦测切换语言。  
src/utils/request.js

```js
import { useAppStoreHook } from '@/store/modules/app'

const appStore = useAppStoreHook()
const language = appStore.language

// 设置语言
if (tokenType === "header") {
  config.headers["think-lang"] = language;
} else {
  config.params.lang = language;
}
```

## 新增多语言

新增多语言需要前后端同时添加语言包并修改配置。下面以新增西班牙语 es 为例。

### 后端新增多语言

#### 后端新增语言包

复制 app/lang/zh-cn.php 后重命名为 app/lang/es.php，并翻译语言包。

#### 后端配置允许语言

在多语言配置文件中添加 es 到 allow_lang_list 数组中  
config/lang.php

```php
    // 允许的语言列表
    'allow_lang_list' => ['zh-cn', 'en', 'es'],
```

### 前端新增多语言

#### 前端新增语言包

复制 src/lang/package/zh-cn.json 后重命名为 src/lang/package/es.json，并翻译语言包。

#### 前端引入语言包

src/lang/index.js

```js
import esLocale from './package/es.json'

const messages = {
    es: {
    ...esLocale
  }
}
```

#### 前端配置多语言选择组件

在多语言选择组件中添加多语言选项和提示。  
src/components/LangSelect/index.vue

```vue
<template>
        <el-dropdown-item :disabled="appStore.language === 'es'" command="es">Español</el-dropdown-item>
</template>

<script setup>
  } else if (lang == 'es') {
    ElMessage.success('¡Cambio de idioma exitoso!')
  } 
</script>
```

#### 前端第三方组件配置多语言

系统切换语言时，第三方组件也需要跟着切换语言。  
比如 element-plus、wangeditor、aieditor 等。  
第三方组件的多语言配置请参考第三方组件的文档

第三方语言代码可能与系统语言代码不一致，需要转换处理。  
src/store/modules/app.js

```js
import es from 'element-plus/es/locale/lang/es'

  // 获取语言、包
  function getLang(component = '') {
    let lang = language.value
    // 第三方组件处理
    if (component === 'element-plus') {
      if (lang === 'zh-cn') {
        return zhCn
      } else if (lang === 'en') {
        return en
      } else if (lang === 'es') {
        return es
      }
    } else if (component === 'wangeditor') {
      if (lang === 'zh-cn') {
        return 'zh-CN'
      }
    } else if (component === 'aieditor') {
      if (lang === 'zh-cn') {
        return 'zh'
      }
    }
    return lang
  }
```

第三方组件的根据系统语言代码加载语言包。比如 wangeditor。

src/components/RichEditor/index.vue

```vue
import { useAppStore } from '@/store/modules/app'
import { i18nChangeLanguage } from '@wangeditor/editor'

// 切换语言
i18nChangeLanguage(appStore.getLang('wangeditor'))
```

如果第三方组件不支持此语言，还需要在第三方组件中增加新语言。

```vue
<script setup>
import { useAppStore } from '@/store/modules/app'
import { i18nAddResources, i18nChangeLanguage } from '@wangeditor/editor'

// 添加新语言
i18nAddResources('es', {
  editor: {
    more: 'Más',
    justify: 'Justificar',
    indent: 'Sangría',
    image: 'Imagen',
    video: 'Video'
  },
  common: { ok: 'Aceptar', delete: 'Eliminar', enter: 'Ingresar' },
  blockQuote: { title: 'Cita' },
  codeBlock: { title: 'Bloque de código' },
  color: {
    color: 'Color de fuente',
    bgColor: 'Color de fondo',
    default: 'Color predeterminado',
    clear: 'Limpiar color de fondo'
  },
  divider: { title: 'Divisor' },
  emotion: { title: 'Emoji' },
  fontSize: { title: 'Tamaño de fuente', default: 'Predeterminado' },
  fontFamily: { title: 'Familia de fuente', default: 'Predeterminado' },
  fullScreen: { title: 'Pantalla completa' },
  header: { title: 'Encabezado', text: 'Texto' },
  image: {
    netImage: 'Imagen de red',
    delete: 'Eliminar imagen',
    edit: 'Editar imagen',
    viewLink: 'Ver enlace',
    src: 'Origen de imagen',
    desc: 'Descripción',
    link: 'Enlace de imagen'
  },
  indent: { decrease: 'Disminuir', increase: 'Aumentar' },
  justify: {
    left: 'Izquierda',
    right: 'Derecha',
    center: 'Centro',
    justify: 'Justificar'
  },
  lineHeight: { title: 'Altura de línea', default: 'Predeterminado' },
  link: {
    insert: 'Insertar enlace',
    text: 'Texto del enlace',
    url: 'URL del enlace',
    unLink: 'Quitar enlace',
    edit: 'Editar enlace',
    view: 'Ver enlace'
  },
  textStyle: {
    bold: 'Negrita',
    clear: 'Limpiar estilos',
    code: 'Código en línea',
    italic: 'Cursiva',
    sub: 'Subíndice',
    sup: 'Superíndice',
    through: 'Tachado',
    underline: 'Subrayado'
  },
  undo: { undo: 'Deshacer', redo: 'Rehacer' },
  todo: { todo: 'Lista de tareas' },
  listModule: {
    unOrderedList: 'Lista desordenada',
    orderedList: 'Lista ordenada'
  },
  tableModule: {
    deleteCol: 'Eliminar columna',
    deleteRow: 'Eliminar fila',
    deleteTable: 'Eliminar tabla',
    widthAuto: 'Ancho automático',
    insertCol: 'Insertar columna',
    insertRow: 'Insertar fila',
    insertTable: 'Insertar tabla',
    header: 'Encabezado'
  },
  videoModule: {
    delete: 'Eliminar',
    uploadVideo: 'Subir video',
    insertVideo: 'Insertar video',
    videoSrc: 'Origen del video',
    videoSrcPlaceHolder: 'URL del archivo de video o <iframe> de terceros',
    videoPoster: 'Póster del video',
    videoPosterPlaceHolder: 'URL de la imagen del póster',
    ok: 'Aceptar',
    editSize: 'Editar tamaño',
    width: 'Ancho',
    height: 'Alto'
  },
  uploadImgModule: {
    uploadImage: 'Subir imagen',
    uploadError: 'Error al subir {{fileName}}'
  },
  highLightModule: { selectLang: 'Idioma' }
})
</script>
```

## 维护多语言

维护多语言时，记得同时维护前后端语言包，完善语言包的键和翻译。  

## 关闭多语言

如果系统只需要一种语言，那么可以关闭多语言，可以省去多语言的维护。  
以中文 zh-cn 为例。

### 后端设置默认语言

在后端环境配置文件中设置默认语言。  
.env

```txt
    [LANG]
    # 默认语言：
    default_lang = zh-cn
```

### 前端设置默认语言

在前端配置文件中设置默认语言。  
src/settings.js

```js
  language: 'zh-cn',
```

在前端多语言选中组件中注释掉语言选项。  
src/components/LangSelect/index.vue

```vue
<template>
    <!-- <el-icon><MapLocation /></el-icon>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item :disabled="appStore.language === 'zh-cn'" command="zh-cn">简体中文</el-dropdown-item>
        <el-dropdown-item :disabled="appStore.language === 'en'" command="en">English</el-dropdown-item>
        <el-dropdown-item :disabled="appStore.language === 'es'" command="es">Español</el-dropdown-item>
      </el-dropdown-menu>
    </template> -->
</template>
```

### 前后端语言函数

在以上设置后，达到关闭多语言的效果。  
后续的开发中，前后端输出语言时，不再写语言函数lang()(php)，t()(vue)，直接写默认语言即可。

## 问题

### 为什么用中文做多语言的键？

因为作者只懂中文，所以用中文做多语言的键。  
