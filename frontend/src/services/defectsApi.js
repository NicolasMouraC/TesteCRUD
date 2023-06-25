const baseURL = 'http://localhost:8000/api';

export const getDefectsAPI = async (id) => {
    const response = await fetch(`${baseURL}/defeitos/${id}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    });

    const res = await response.json();
    return res;
};

export const createDefectAPI = async ({title, gravity, description, carId}) => {
    const response = await fetch(`${baseURL}/defeitos`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            Titulo: title,
            Gravidade: gravity, 
            Descricao: description,
            carro_id: carId
        })
    });

    const res = response;

    return res;
}