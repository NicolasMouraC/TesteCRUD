const baseURL = process.env.NODE_ENV === 'development' ? 'http://laravel:8000/api' : 'http://localhost:8000/api'

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

    return res;
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

    return res;
}

export const updateCarImageAPI = async ({id, image}) => {
  console.log(image)
  await fetch(`${baseURL}/carros/foto/${id}`, {
      method: 'POST',
      body: image
  });

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

export const getFilteredCarsAPI = async (filter, searchTerm) => {
  const response = await fetch(`${baseURL}/carros/${filter}/${searchTerm}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
  });

  const res = await response.json();
  return res;
}