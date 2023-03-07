import Header from "./components/Header/Header";
import JobList from "./components/JobList/JobList";
import { JobFilterProvider } from "./contexts/JobFilter";

function App() {
  return (
    <>
      <Header />
      <JobFilterProvider>
        <JobList />
      </JobFilterProvider>
    </>
  );
}

export default App;
