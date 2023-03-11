import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RickAndMortyQuery } from "./components/RickAndMorty";
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex align-middle justify-center flex-col text-center h-screen">
        <h1 className="text-2xl underline">Vite React Template</h1>
        <p>axios</p>
        <p>@tanstack/react-query</p>
        <p>zod</p>
        <p>tailwind</p>
        <RickAndMortyQuery />
      </div>
    </QueryClientProvider>
  );
}

export default App;
