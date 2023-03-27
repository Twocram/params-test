import { useState } from 'react';

interface Param {
  id: number;
  name: string;
  type: 'text';
}

interface ParamValue {
  paramId: number;
  value: string;
}

interface Model {
  paramValues: ParamValue[];
  colors: Color[];
}

interface Props {
  params: Param[];
  model: Model;
  onChange: (model: Model) => void;
}

interface Color {
  id: number;
  color: string;
}

const TextParamEditor = ({
  param,
  value,
  onChange,
}: {
  param: Param;
  value: string;
  onChange: (value: string) => void;
}) => {
  return (
    <div>
      <label>{param.name}:</label>
      <input
        type={param.type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

const ModelEditor = ({ params, model, onChange }: Props) => {
  const [paramValues, setParamValues] = useState(model.paramValues);

  const handleParamChange = (paramId: number, value: string) => {
    const newParamValues = paramValues.map((item) =>
      item.paramId === paramId ? { ...item, value } : item
    );
    setParamValues(newParamValues);
    onChange({ ...model, paramValues: newParamValues });
  };

  return (
    <div>
      {params.map((param) => {
        const paramValue = paramValues.find((p) => p.paramId === param.id);
        const value = paramValue ? paramValue.value : '';
        return (
          <TextParamEditor
            key={param.id}
            param={param}
            value={value}
            onChange={(value) => handleParamChange(param.id, value)}
          />
        );
      })}
    </div>
  );
};

export default function App() {
  const params: Param[] = [
    {
      id: 1,
      name: 'Назначение',
      type: `text`,
    },
    {
      id: 2,
      name: 'Длина',
      type: `text`,
    },
  ];

  const model: Model = {
    paramValues: [
      {
        paramId: 1,
        value: 'повседневное',
      },
      {
        paramId: 2,
        value: 'макси',
      },
    ],
    colors: [
      { id: 1, color: 'черный' },
      { id: 2, color: 'белый' },
    ],
  };

  const handleModelChange = (newModel: Model) => {
    console.log(newModel);
  };

  return (
    <div>
      <ModelEditor params={params} model={model} onChange={handleModelChange} />
    </div>
  );
}
