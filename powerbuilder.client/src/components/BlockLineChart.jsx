// powerbuilder.client/src/components/BlockLineChart.jsx
import React from 'react';
import {
    ResponsiveContainer,
    ComposedChart,
    Bar,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from 'recharts';

const data = [
    { week: 'Week 1', Hypertrophy: 50, Strength: 0, Peaking: 0, Intensity: 70 },
    { week: 'Week 2', Hypertrophy: 60, Strength: 0, Peaking: 0, Intensity: 75 },
    { week: 'Week 3', Hypertrophy: 70, Strength: 0, Peaking: 0, Intensity: 80 },
    { week: 'Week 4', Hypertrophy: 30, Strength: 0, Peaking: 0, Intensity: 60 }, // Deload
    { week: 'Week 5', Hypertrophy: 0, Strength: 50, Peaking: 0, Intensity: 72 },
    { week: 'Week 6', Hypertrophy: 0, Strength: 60, Peaking: 0, Intensity: 78 },
    { week: 'Week 7', Hypertrophy: 0, Strength: 70, Peaking: 0, Intensity: 83 },
    { week: 'Week 8', Hypertrophy: 0, Strength: 30, Peaking: 0, Intensity: 65 }, // Deload
    { week: 'Week 9', Hypertrophy: 0, Strength: 0, Peaking: 50, Intensity: 75 },
    { week: 'Week 10', Hypertrophy: 0, Strength: 0, Peaking: 60, Intensity: 80 },
    { week: 'Week 11', Hypertrophy: 0, Strength: 0, Peaking: 70, Intensity: 85 },
    { week: 'Week 12', Hypertrophy: 0, Strength: 0, Peaking: 30, Intensity: 60 } // Deload
];

const BlockLineChart = ({ selectedWeek }) => {
    const highlightedData = data.map((item, index) => ({
        ...item,
        fillOpacity: index === selectedWeek ? 1 : 0.3,
        lineOpacity: index === selectedWeek ? 1 : 0.3
    }));

    return (
        <ResponsiveContainer width="100%" height="100%">
            <ComposedChart data={highlightedData} margin={{ top: 10, right: 20, left: 10, bottom: 10 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="week" tick={{ fontSize: 8 }} />
                <YAxis tick={{ fontSize: 8 }} />
                <Tooltip />
                <Legend iconSize={8} wrapperStyle={{ fontSize: '8px' }} />
                <Bar dataKey="Hypertrophy" stackId="a" fill="rgba(136, 132, 216, 0.8)" />
                <Bar dataKey="Strength" stackId="a" fill="rgba(130, 202, 157, 0.8)" />
                <Bar dataKey="Peaking" stackId="a" fill="rgba(255, 115, 0, 0.8)" />
                <Line type="monotone" dataKey="Intensity" stroke="#FF0000" />
            </ComposedChart>
        </ResponsiveContainer>
    );
};

export default BlockLineChart;
