import { Form, ImgGif} from "./styles";
import { useForm } from "react-hook-form";
import Logo from "../../assets/Logo.png";
import Gif from "../../assets/loading.gif";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ApiContext } from "../../context/ContextApi";
import { useContext } from "react";

export interface IFormularioCadastro {
  nome: string;
  email: string;
  telefone: string;
  cpf: string;
  pais: string;
  cidade: string;
}

const validaForm = yup.object().shape({
  email: yup
    .string()
    .required("O email é obrigatório")
    .email("E-mail inválido"),
  nome: yup.string().required("O nome é obrigatório"),
  telefone: yup.number().required("O telefone é obrigatório"),
  cpf: yup.number().required("O cpf é obrigatório"),
  cidade: yup.string().required(),
});

function Cadastro() {
  const { listCountry, listFilterCity, changeCountry, loading } = useContext(ApiContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormularioCadastro>({
    resolver: yupResolver(validaForm),
  });

  function submit(data: any) {
    console.log(data);
  }

  return (
    <>
      {!loading ? (
        <Form onSubmit={handleSubmit(submit)}>
          <img src={Logo} alt="Logo_AllyHub" />
          <div className="containerExterno">
            <section>
              <h2>Dados pessoais</h2>
              <div className="fields">
                <label>Nome</label>
                <input
                  placeholder="Digite seu nome completo"
                  type="text"
                  {...register("nome")}
                />
                <span className="error-msn">{errors.nome?.message}</span>
              </div>

              <div className="fields">
                <label>Email</label>
                <input
                  placeholder="Digite seu email"
                  type="email"
                  {...register("email")}
                />

                <span className="error-msn">{errors.email?.message}</span>
              </div>

              <div className="fields">
                <label>Telefone</label>
                <input
                  placeholder="Digite seu telefone"
                  type="text"
                  {...register("telefone")}
                />
                <span className="error-msn">{errors.telefone?.message}</span>
              </div>

              <div className="fields">
                <label>CPF</label>
                <input placeholder="digite seu cpf" {...register("cpf")} />
                <span className="error-msn">{errors.cpf?.message}</span>
              </div>
            </section>

            <section>
              <h2>Destino de interresse</h2>

              <div className="fields">
                <label>País</label>

                {listCountry.length > 0 && (
                  <select {...register("pais")}  onClick={changeCountry}>
                    <option selected disabled >Selecione um país...</option>
                    {listCountry.map((ele, index) => (
                      <option key={index} value={ele.code}>
                        {ele.name_ptbr ? ele.name_ptbr : ele.name}
                      </option>
                    ))}
                  </select>
                )}
              </div>

              <div className="fields">
              
                {listFilterCity && listFilterCity.length>0 &&(
                  <>
                    <label>Cidade</label>
                    <select {...register("cidade")}>
                    <option selected disabled >Selecione uma cidade...</option>
                      {listFilterCity.map((ele, index) => (
                        <option key={index} value={ele.name_ptbr}>
                          {ele.name}
                        </option>
                      ))}
                    </select>
                  </>
                )}
              </div>
            </section>
          </div>

          <button type="submit">Cadastrar</button>
        </Form>
      ):
      <ImgGif className="gif" src={Gif} alt="gifLogo"/>
      }
    </>
  );
}

export default Cadastro;
