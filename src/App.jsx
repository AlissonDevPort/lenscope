import "./App.css";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Swal from "sweetalert2";

function App() {
  const { handleSubmit } = useForm();

  const [cilinEsquerdo, setCilinEsquerdo] = useState(0);
  const [esfericoEsquerdo, setEsfericoEsquerdo] = useState(0);
  const [cilinDireito, setCilinDireito] = useState(0);
  const [esfericoDireito, setEsfericoDireito] = useState(0);

  const submitValues = () => {
    console.log(cilinEsquerdo);
    console.log(esfericoEsquerdo);
    console.log(cilinDireito);
    console.log(esfericoDireito);
    if (esfericoEsquerdo < -15 || esfericoDireito < -15) {
      Swal.fire("O valor limite do grau esférico de 0 a -15");
    }
    if (cilinEsquerdo < -6 || cilinDireito < -6) {
      Swal.fire("O valor limite do grau cilindrico de 0 a -6");
    }

    if (esfericoEsquerdo < 0 || esfericoDireito < 0) {
      console.log(",");
      if (cilinEsquerdo <= -2 || cilinDireito <= -2) {
        console.log(".");
        if (
          (esfericoEsquerdo <= -3 && esfericoEsquerdo >= -10) ||
          (esfericoDireito <= -3 && esfericoDireito >= -10)
        ) {
          Swal.fire(
            "A melhor opção para você e a nossa lente PRIME, entre em contato e adquira já"
          );
        } else {
          Swal.fire(
            "A melhor opção para você e a nossa lente VISION, entre em contato e adquira já"
          );
        }
      } else if (cilinEsquerdo >= -5 || cilinDireito >= -5) {
        Swal.fire(
          "A melhor opção para você e a nossa lente VISION, entre em contato e adquira já"
        );
      }
    } else {
      Swal.fire("Sem grau para óculos");
    }
  };

  return (
    <div className="App">
      <main className="flex justify-center px-3">
        <div className="bg-gray-500 px-8 py-16 rounded-2xl">
          <h1 className="text-center mb-5 text-2xl">Escolha o grau</h1>
          <div className="h-1 bg-black my-5"></div>
          <div>
            <form onSubmit={handleSubmit(submitValues)}>
              <label className="block text-center">Olho esquerdo</label>
              <div className="my-4">
                <label className="block">Grau cilíndrico</label>

                <button
                  type="button"
                  className="bg-white p-2 rounded-xl m-2 h-10 w-10"
                  onClick={() => setCilinEsquerdo(cilinEsquerdo - 0.25)}
                >
                  -
                </button>

                <input
                  value={cilinEsquerdo}
                  disabled
                  className="outline-0 h-10 rounded-xl text-center"
                  type="number"
                  step="0.00"
                  name="cilindricoEsquerdo"
                />

                <button
                  type="button"
                  className="bg-white p-2 rounded-xl m-2 h-10 w-10"
                  onClick={() => setCilinEsquerdo(cilinEsquerdo + 0.25)}
                >
                  +
                </button>
              </div>
              <div className="my-4">
                <label className="block">Grau esférico</label>

                <button
                  type="button"
                  className="bg-white p-2 rounded-xl m-2 h-10 w-10"
                  onClick={() => setEsfericoEsquerdo(esfericoEsquerdo - 0.25)}
                >
                  -
                </button>

                <input
                  value={esfericoEsquerdo}
                  disabled
                  className="outline-0 h-10 rounded-xl text-center"
                  type="number"
                  step="0.00"
                  name="esfericoEsquerdo"
                />

                <button
                  type="button"
                  className="bg-white p-2 rounded-xl m-2 h-10 w-10"
                  onClick={() => setEsfericoEsquerdo(esfericoEsquerdo + 0.25)}
                >
                  +
                </button>
              </div>

              <div className="h-1 bg-black my-5"></div>

              <label className="block text-center">Olho direito</label>
              <div className="my-4">
                <label className="block">Grau cilíndrico</label>

                <button
                  type="button"
                  className="bg-white p-2 rounded-xl m-2 h-10 w-10"
                  onClick={() => setCilinDireito(cilinDireito - 0.25)}
                >
                  -
                </button>

                <input
                  value={cilinDireito}
                  disabled
                  className="outline-0 h-10 rounded-xl text-center"
                  type="number"
                  step="0.00"
                  name="cilindricoDireito"
                />

                <button
                  type="button"
                  className="bg-white p-2 rounded-xl m-2 h-10 w-10"
                  onClick={() => setCilinDireito(cilinDireito + 0.25)}
                >
                  +
                </button>
              </div>
              <div className="my-4">
                <label className="block">Grau esférico</label>

                <button
                  type="button"
                  className="bg-white p-2 rounded-xl m-2 h-10 w-10"
                  onClick={() => setEsfericoDireito(esfericoDireito - 0.25)}
                >
                  -
                </button>

                <input
                  value={esfericoDireito}
                  disabled
                  className="outline-0 h-10 rounded-xl text-center"
                  type="number"
                  step="0.00"
                  name="esfericoDireito"
                />

                <button
                  type="button"
                  className="bg-white p-2 rounded-xl m-2 h-10 w-10"
                  onClick={() => setEsfericoDireito(esfericoDireito + 0.25)}
                >
                  +
                </button>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="cursor-pointer rounded-xl bg-red-500 px-8 py-3 mt-5 text-white"
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
