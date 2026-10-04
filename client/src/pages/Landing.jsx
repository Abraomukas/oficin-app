import { appConfig, tenantConfig } from "../config/appConfig";

export default function Landing({ onLogin }) {
  return (
    <main className="min-vh-100 d-flex flex-column justify-content-center align-items-center text-center bg-light px-3">
      <div className="d-flex flex-wrap justify-content-center align-items-center gap-3 mb-4">
        <h1 className="h2 mb-0">{appConfig.name} for</h1>
        <img
          src={tenantConfig.logoUrl}
          alt={`${tenantConfig.companyName} logo`}
          height="48"
        />
      </div>

      <button className="btn btn-primary btn-lg px-5" onClick={onLogin}>
        Log in
      </button>
    </main>
  );
}