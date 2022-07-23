# 數據鏈分析-前端

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 前端交接
HomeView.vue中
```
<button @click="changeTime('20220701-now.py.json'), open=false" 
            class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">7/1</button>
```
changeTime('這裡可以置入要切換的json檔')，目前是以7/1和7/3作呈現示範，日後若有生成新的資料可以直接做替換。