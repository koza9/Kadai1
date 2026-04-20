const { createApp, ref } = Vue;// Vueのグローバルオブジェクトから createApp と ref を取り出す
const { createVuetify } = Vuetify;// Vuetify を取り出し
const vuetify = createVuetify();// Vuetify を作ってプラグイン登録する

const app = Vue.createApp({
  setup: function ()  {
    //ref関数:Vueの リアクティブな変数 を作る仕組みで、.value に実際の値を持ち、更新すると自動で画面が更新されます。
    const result = ref("");
    const message = ref("");
    const color = ref("");
    const item = ref("");
    const direction = ref("");
 
    //async/await
    async function getFortune() {
      const res =await axios.get("https://narrow-moth-43.deno.dev/omikuji?name=onamae");
      
      //ref関数に値を設定する場合は、.value プロパティを使う。
      result.value=res.data.result;
      message.value=res.data.message;
      color.value=res.data.lucky.color;
      item.value=res.data.lucky.item;
      direction.value=res.data.lucky.direction;
    }
    // HTML から使いたい変数や関数を return で返す
    return { result, message,color,item,direction,getFortune }; 
  }
})  .use(vuetify)          // Vuetify を使う宣言
  .mount('#app');        // Vue が管理するDOM