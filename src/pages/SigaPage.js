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
            ],
            sispass: ['Pássaro 1', 'Pássaro 2'],
            dof: ['Transação 1', 'Transação 2'],
            prevfogo: ['Incêndio 1', 'Incêndio 2'],
        },
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
            sispass: [],
            dof: [],
            prevfogo: [],
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
        newData[index].autos.push({
            id: Date.now(),
            auto: '',
            orgao: '',
            valor: 0,
            dataAutuacao: '',
            localAutuacao: '',
            artigoInfringido: '',
        });
        setData(newData);
    };

    const removeAuto = (index, autoId) => {
        const newData = [...data];
        newData[index].autos = newData[index].autos.filter((auto) => auto.id !== autoId);
        setData(newData);
    };

    const updateMultiLineField = (index, field, value, itemIndex) => {
        const newData = [...data];
        newData[index][field][itemIndex] = value;
        setData(newData);
    };

    const addSispass = (index) => {
        const newData = [...data];
        newData[index].sispass.push('');
        setData(newData);
    };

    const removeSispass = (index, sispassIndex) => {
        const newData = [...data];
        newData[index].sispass.splice(sispassIndex, 1);
        setData(newData);
    };

    const addDof = (index) => {
        const newData = [...data];
        newData[index].dof.push('');
        setData(newData);
    };

    const removeDof = (index, dofIndex) => {
        const newData = [...data];
        newData[index].dof.splice(dofIndex, 1);
        setData(newData);
    };

    const addPrevfogo = (index) => {
        const newData = [...data];
        newData[index].prevfogo.push('');
        setData(newData);
    };

    const removePrevfogo = (index, prevfogoIndex) => {
        const newData = [...data];
        newData[index].prevfogo.splice(prevfogoIndex, 1);
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
                        <th>SISPASS</th>
                        <th>DOF</th>
                        <th>PREVFOGO</th>
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
                                            onChange={(e) => updateAutoField(rowIndex, autoIndex, 'valor', e.target.value)}
                                            placeholder="Valor (R$)"
                                        />
                                        <input
                                            type="date"
                                            value={auto.dataAutuacao}
                                            onChange={(e) => updateAutoField(rowIndex, autoIndex, 'dataAutuacao', e.target.value)}
                                            placeholder="Data de Autuação"
                                        />
                                        <input
                                            type="text"
                                            value={auto.localAutuacao}
                                            onChange={(e) => updateAutoField(rowIndex, autoIndex, 'localAutuacao', e.target.value)}
                                            placeholder="Local de Autuação"
                                        />
                                        <input
                                            type="text"
                                            value={auto.artigoInfringido}
                                            onChange={(e) => updateAutoField(rowIndex, autoIndex, 'artigoInfringido', e.target.value)}
                                            placeholder="Artigo Infringido"
                                        />
                                        <button onClick={() => removeAuto(rowIndex, auto.id)}>Remover Auto</button>
                                    </div>
                                ))}
                                <button onClick={() => addAuto(rowIndex)}>Adicionar Auto</button>
                            </td>
                            <td>
                            {row.sispass.map((sispass, sispassIndex) => (
                                <div key={sispassIndex}>
                                    <input
                                        type="text"
                                        value={sispass}
                                        onChange={(e) => updateMultiLineField(rowIndex, 'sispass', e.target.value, sispassIndex)}
                                        placeholder="Pássaro"
                                    />
                                    <button onClick={() => removeSispass(rowIndex, sispassIndex)}>Remover SISPASS</button>
                                </div>
                            ))}
                            <button onClick={() => addSispass(rowIndex)}>Adicionar SISPASS</button>
                        </td>
                        <td>
                            {row.dof.map((dof, dofIndex) => (
                                <div key={dofIndex}>
                                    <input
                                        type="text"
                                        value={dof}
                                        onChange={(e) => updateMultiLineField(rowIndex, 'dof', e.target.value, dofIndex)}
                                        placeholder="Transação"
                                    />
                                    <button onClick={() => removeDof(rowIndex, dofIndex)}>Remover DOF</button>
                                </div>
                            ))}
                            <button onClick={() => addDof(rowIndex)}>Adicionar DOF</button>
                        </td>
                        <td>
                            {row.prevfogo.map((prevfogo, prevfogoIndex) => (
                                <div key={prevfogoIndex}>
                                    <input
                                        type="text"
                                        value={prevfogo}
                                        onChange={(e) => updateMultiLineField(rowIndex, 'prevfogo', e.target.value, prevfogoIndex)}
                                        placeholder="Incêndio"
                                    />
                                    <button onClick={() => removePrevfogo(rowIndex, prevfogoIndex)}>Remover PREVFOGO</button>
                                </div>
                            ))}
                            <button onClick={() => addPrevfogo(rowIndex)}>Adicionar PREVFOGO</button>
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
