import { CardLayout } from "@/components/elements/CardLayout"

export function HomePage() {
  return (
    <>
      {/* TODO: trabajr en la pagina home page */}
    <CardLayout className="flex">

      <div className="m-5 w-1/2 place-items-center" >
        <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPMERRmmNtL2sDNMDsJiFuJ1fJDw809-cbSw&s" alt="" />
      </div>                                      
      <div className="w-1/2 flex flex-col items-center justify-center text-center">
        <h2 className="text-primary mb-3 text-xl  ">Recuerdos del 5C</h2>
        <small className="text-center">
            <strong className="text-primary">Somos Especiales</strong> para el mundo
        </small>
      </div>

    </CardLayout>

    <CardLayout>
      <p>Nosotros</p>
    </CardLayout>
    </>
  )
}
