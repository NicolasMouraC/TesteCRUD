const baseURL = 'http://localhost:8000/api';

export const getCarsAPI = async () => {
    const response = await fetch(`${baseURL}/carros`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    });
  
    const res = await response.json();
    return res;
};

export const createCarAPI = async ({model, year, numSeats, fuelType, category, brand, engine, color}) => {
    const response = await fetch(`${baseURL}/carros`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            Modelo: model,
            Ano: year, 
            NumAssentos: numSeats, 
            TipoCombustivel: fuelType, 
            Categoria: category, 
            Marca: brand, 
            Motor: engine, 
            Cor: color
        })
    });

    const res = response;

    console.log(res)
    //return res;
}

export const editCarAPI = async ({id, model, year, numSeats, fuelType, category, brand, engine, color}) => {
    const response = await fetch(`${baseURL}/carros/${id}`, {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            Modelo: model,
            Ano: year, 
            NumAssentos: numSeats, 
            TipoCombustivel: fuelType, 
            Categoria: category, 
            Marca: brand, 
            Motor: engine, 
            Cor: color
        })
    });

    const res = response;

    console.log(res)
    //return res;
}

export const getCarAPI = async (id) => {
    const response = await fetch(`${baseURL}/carros/${id}`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
    });

    const res = await response.json();
    return res;
}

export const deleteCarAPI = async (id) => {
    await fetch(`${baseURL}/carros/${id}`, {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
    })
}