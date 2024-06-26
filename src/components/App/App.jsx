import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox.jsx";
import ContactList from "../ContacList/ContactList.jsx";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contactsOps.js";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="container">
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}

export default App;

// export default function App() {
//   const isLoading = useSelector(selectLoading);
//   const isError = useSelector(selectError);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

//   return (
//     <>
//       <div className={css.container}>
//         <h1>Phonebook</h1>
//         <ContactForm />
//         <SearchBox />
//         {isLoading && <p>Loading, please wait...</p>}
//         {isError && <p>Something went wrong. Please try again!</p>}
//         <ContactList />
//       </div>
//     </>
//   );
// }
