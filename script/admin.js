const canvas = document.getElementById('canvas').getContext('2d');

let chart = new Chart(canvas, {
  type: 'bar',
  data: {
    labels: ['Statistiques'],
    datasets: [
      {
        label: "Utilisateurs non vérifiés",
        data: [10],
        backgroundColor: ['#ff7300ff']
      },
      {
        label: "Nb Entreprise",
        data: [7],
        backgroundColor: ['blue']
      },
      {
        label: "Utilisateurs Bannis",
        data: [10],
        backgroundColor: ['red']
      },
    ]
  },
});
