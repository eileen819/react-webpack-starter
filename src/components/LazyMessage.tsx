export default function LazyMessage() {
  return (
    <section>
      <h2>Lazy Loaded Component</h2>
      <p>
        이 컴포넌트는 처음부터 main bundle에 포함되지 않고, 필요할 때
        로드됩니다.
      </p>
    </section>
  );
}
