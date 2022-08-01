import type { NextPage } from "next";
import Link from "next/link";

const ClientsPage: NextPage = () => {
  const clients = [
    { id: "ham", label: "Lewis Hamilton" },
    { id: "ver", label: "Max Verstappen" },
    { id: "rus", label: "George Russell" },
  ];
  return (
    <div>
      <h1>The client&apos;s page</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link href={`/clients/${client.id}`}>{client.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClientsPage;
