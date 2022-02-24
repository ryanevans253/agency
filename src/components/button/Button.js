export default function Button(props) {
  return (
    <div>
      <button className={`button`} onClick={() => console.log("clicked")}>
        {props.text}
      </button>
    </div>
  );
}
