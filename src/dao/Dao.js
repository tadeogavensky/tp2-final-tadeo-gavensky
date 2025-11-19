class Dao {
  data = [
    {
      id: "AAB001",
      xa: 7500,
      ya: 6200,
      za: 1000,
    },
    {
      id: "AAB002",
      xa: 8120,
      ya: 5900,
      za: 1200,
    },
    {
      id: "AAB003",
      xa: 7010,
      ya: 6550,
      za: 950,
    },
    {
      id: "AAB004",
      xa: 7800,
      ya: 6400,
      za: 1500,
    },
    {
      id: "AAB005",
      xa: 8200,
      ya: 6100,
      za: 1350,
    },
    {
      id: "AAB006",
      xa: 7600,
      ya: 6800,
      za: 1100,
    },
    {
      id: "AAB007",
      xa: 6950,
      ya: 7000,
      za: 900,
    },
    {
      id: "AAB008",
      xa: 7400,
      ya: 6250,
      za: 1050,
    },
    {
      id: "AAB009",
      xa: 8000,
      ya: 6600,
      za: 1400,
    },
    {
      id: "AAB010",
      xa: 7900,
      ya: 6000,
      za: 1000,
    },
  ];

  getAll = async () => {
    return this.data;
  };

  getById = async (id) => {
    return this.data.find((item) => item.id === id);
  };

  create = async (newData) => {
    const data = this.data.push(newData);
    return data;
  };

  update = async (id, newData) => {
    const index = this.data.findIndex((x) => x.id === id);

    this.data[index] = { ...this.data[index], ...newData };
    return this.data[index];
  };

  delete = async (id) => {
    this.data = this.data.filter((item) => item.id !== id);
  };
}

export default Dao;
