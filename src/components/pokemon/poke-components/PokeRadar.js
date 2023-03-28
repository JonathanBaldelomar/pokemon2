import React from 'react';
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
);

export function PokeRadar(pokemon) {
    const data = {
        labels: ['Attack', 'Speed', 'HP', 'XP', 'Programming skills'],
        datasets: [
            {
                label: 'Stats',
                data: [1, 4, 3, 2, 5],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 4,
            },
        ],
    };
    return <Radar data={data} />;
}
