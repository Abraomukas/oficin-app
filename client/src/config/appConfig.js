import hydSpainLogo from "../assets/h&d-logo-original.png";

export const appConfig = {
  name: "SeatReserve",
};

const clients = {
  test: {
    companyName: "Placeholder Client",
    logoUrl: "https://placehold.co/160x48?text=Company+Logo",
  },
  hydSpain: {
    companyName: "H&D España",
    logoUrl: hydSpainLogo,
  },
};

const CLIENT_ID = "placeholder";

export function getClientConfig(clientId = CLIENT_ID) {
  return clients[clientId] ?? clients[CLIENT_ID];
}

const activeClientId = import.meta.env.VITE_CLIENT_ID;

export const clientConfig = getClientConfig(activeClientId);
