export default function EnvInfo() {
  return (
    <section>
      <h1>{process.env.APP_PUBLIC_TITLE}</h1>
      <p>{process.env.APP_PUBLIC_API_BASE_URL}</p>
    </section>
  );
}
