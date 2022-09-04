import { ref } from "vue";
let input = ref<string>("");
let flag = true;
let name = "jayce";
const arr = ["a", "b", "c", "d", "e", "f"];
const handleClick = function (name: any) {
  console.log("[click]: ", "click-->", name);
};
const renderDom = (props: any) => {
  console.log("[props]: ", props);
  return (
    <div>
      {/* v-model template 中会自动解包去访问.value, 但是tsx中不会 */}
      <input v-model={input.value} type="text" />
      {input.value}
      <div v-show={flag}>Hello TSX</div>
      {/* <div v-if={flag}>v-if 不支持哦 会报错的</div> */}

      {/* v-show */}
      {flag ? <h1>显示了</h1> : <h1>不显示</h1>}

      {/* 遍历的实现，和 React 一样，tsx 语法是不支持 v-for 的 */}
      <ul>
        {arr.map((it) => {
          return <li>{it}</li>;
        })}
      </ul>

      {/* v-bind 写法不再用 `:`, 而是和 React 一样 */}
      <div bind-value={name}>test</div>

      {/* v-on 也是不支持的, 而是和 React 一样 */}
      <button onClick={handleClick}>click</button>
      {/* v-on 传参 , bind 返回一个新的函数*/}
      <button onClick={handleClick.bind(this, name)} name={name}>
        click2
      </button>
      {/* 注意，tsx 不支持事件修饰符 */}
    </div>
  );
};

export default renderDom;
