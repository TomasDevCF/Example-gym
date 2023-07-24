export default function Fallback() {
  return (
    <div style={{height: "100vh"}} className="fallback w-100 d-flex justify-content-center align-items-center">
      <div style={{width: "3.5rem", height: "3.5rem"}} class="spinner-border spin" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}
