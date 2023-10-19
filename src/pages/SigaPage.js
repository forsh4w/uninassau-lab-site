import React, { useState, useEffect } from 'react';
import BackLink from '../components/BackLink';

import '../css/responsive.css';
import '../css/SigaPage.css';

const SigaPage = () => {



    const [data, setData] = useState([
        {
            nome: 'João da Silva',
            cpfCnpj: '123.456.789-00',
            autos: [
                {
                    id: 1,
                    auto: '123/2023',
                    orgao: 'IBAMA',
                    valor: 1000,
                    dataAutuacao: '2023-08-25',
                    localAutuacao: 'Reserva Ambiental',
                    artigoInfringido: 'Artigo 123',
                },
                // ... (outros autos fictícios)
            ],
        },
        // ... (outros dados fictícios)
    ]);

    // Carrega os dados do armazenamento local ao iniciar
    useEffect(() => {
        const savedData = localStorage.getItem('sigaData');
        if (savedData) {
            setData(JSON.parse(savedData));
        }
    }, []);

    // Salva os dados no armazenamento local sempre que houver alterações
    useEffect(() => {
        localStorage.setItem('sigaData', JSON.stringify(data));
    }, [data]);



    const addRow = () => {
        const newRow = {
            nome: '',
            cpfCnpj: '',
            autos: [],
        };
        setData([...data, newRow]);
    };

    const removeRow = (index) => {
        const newData = [...data];
        newData.splice(index, 1);
        setData(newData);
    };

    const updateRow = (index, field, value) => {
        const newData = [...data];
        newData[index][field] = value;
        setData(newData);
    };

    const updateAutoField = (rowIndex, autoIndex, field, value) => {
        const newData = [...data];
        newData[rowIndex].autos[autoIndex][field] = value;
        setData(newData);
      };

    const addAuto = (index) => {
        const newData = [...data];
        newData[index].autos.push({ id: Date.now(), auto: '', orgao: '' });
        setData(newData);
    };

    const removeAuto = (index, autoId) => {
        const newData = [...data];
        newData[index].autos = newData[index].autos.filter((auto) => auto.id !== autoId);
        setData(newData);
    };

    return (
        <div className="siga-page">

<BackLink to="/" text="Voltar" />


            <h1>Sistema Integrado de Gestão Ambiental (SIGA)</h1>
            <table>
                <thead>
                    <tr>
                        <th>Nome do Autuado</th>
                        <th>CPF/CNPJ do Autuado</th>
                        <th>Autos de Infração</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            <td>
                                <input
                                    type="text"
                                    value={row.nome}
                                    onChange={(e) => updateRow(rowIndex, 'nome', e.target.value)}
                                    placeholder="Nome do Autuado"
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    value={row.cpfCnpj}
                                    onChange={(e) => updateRow(rowIndex, 'cpfCnpj', e.target.value)}
                                    placeholder="CPF/CNPJ do Autuado"
                                />
                            </td>
                            <td>
                                {row.autos.map((auto, autoIndex) => (
                                    <div key={auto.id}>
                                        <input
                                            type="text"
                                            value={auto.auto}
                                            onChange={(e) => updateAutoField(rowIndex, autoIndex, 'auto', e.target.value)}
                                            placeholder="Auto de Infração"
                                        />
                                        <input
                                            type="text"
                                            value={auto.orgao}
                                            onChange={(e) => updateAutoField(rowIndex, autoIndex, 'orgao', e.target.value)}
                                            placeholder="Órgão"
                                        />
                                        <input
                                            type="number"
                                            value={auto.valor}
                                            onChange={(e) => updateRow(rowIndex, autoIndex, 'valor', e.target.value)}
                                            placeholder="Valor (R$)"
                                        />
                                        <input
                                            type="date"
                                            value={auto.dataAutuacao}
                                            onChange={(e) => updateRow(rowIndex, autoIndex, 'dataAutuacao', e.target.value)}
                                            placeholder="Data de Autuação"
                                        />
                                        <input
                                            type="text"
                                            value={auto.localAutuacao}
                                            onChange={(e) => updateRow(rowIndex, autoIndex, 'localAutuacao', e.target.value)}
                                            placeholder="Local de Autuação"
                                        />
                                        <input
                                            type="text"
                                            value={auto.artigoInfringido}
                                            onChange={(e) => updateRow(rowIndex, autoIndex, 'artigoInfringido', e.target.value)}
                                            placeholder="Artigo Infringido"
                                        />
                                        <button onClick={() => removeAuto(rowIndex, auto.id)}>Remover Auto</button>
                                    </div>
                                ))}
                                <button onClick={() => addAuto(rowIndex)}>Adicionar Auto</button>
                            </td>
                            <td>
                                <button onClick={() => removeRow(rowIndex)}>Remover Linha</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={addRow}>Adicionar Linha</button>
        </div>
    );

};


export default SigaPage;
