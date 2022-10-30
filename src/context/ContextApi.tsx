import {
  createContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import api from "../services/api";

interface ApiContextProps {
  children: ReactNode;
}

interface IListCountry {
  code: string;
  name: string;
  name_ptbr: string;
}

interface IListCity {
  id: number;
  code: string;
  name: string;
  country_code: string;
  created_at: Date;
  updated_at: Date;
  name_ptbr: string;
  lat: string;
  log: string;
  url1: string;
  url2: string;
}

export interface ApiContextData {
  listCountry: IListCountry[];
  listCity: IListCity[];
  changeCountry: (e: any) => void;
  listFilterCity: IListCity[];
  loading: boolean;
}

export const ApiContext = createContext<ApiContextData>({} as ApiContextData);

export const ApiContextProvider = ({ children }: ApiContextProps) => {

  const [listCountry, setListCountry] = useState<IListCountry[]>([] as IListCountry[]);
  const [listCity, setListCity] = useState<IListCity[]>([] as IListCity[]);
  const [listFilterCity, setListFilterCity] = useState<IListCity[]>([] as IListCity[]);
  const [loading, setLoading] = useState<boolean>(true);


  useEffect(() => {
    api
      .get("/country")
      .then((res) => {
        setLoading(false);
        setListCountry(res.data);
        
      })
      .catch((err) => console.log(err));
    api
      .get("/city")
      .then((res) => {
        setListCity(res.data);
      })
      .catch((err) => console.log(err));
  }, []);


  const changeCountry = (e: any) => {
    const filtered = listCity.filter(
      (ele) => ele.country_code === e.target.value
    );
    setListFilterCity(filtered);
  };

  return (
    <ApiContext.Provider
      value={{
        listCountry,
        listCity,
        changeCountry,
        listFilterCity,
        loading,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};
