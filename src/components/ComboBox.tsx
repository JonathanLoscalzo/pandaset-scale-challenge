import axios from 'axios';
import { useState, useEffect } from 'react';

export default function ComboBox(props: { handleFrameChange: (frame: string) => unknown }) {
  const [options, setOptions] = useState<{ id: string; name: string }[]>([]);
  const [selectedOption, setSelectedOption] = useState('');

  useEffect(() => {
    const availableFrames = new Array(11).fill(0).map((_, i) => ({
      id: i.toString().padStart(2, '0'),
      name: `frame_${i.toString().padStart(2, '0')}.json`
    }));
    setOptions(availableFrames); // Actualiza el estado con los datos
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (event: any) => {
    setSelectedOption(event.target.value);
    // This method required the proxy to work as expected
    axios
      .get(`/api/frames/frame_${event.target.value}.json`)
      .then((response) => response.data)
      .then((data) => props.handleFrameChange(data));
  };

  return (
    <div>
      <label htmlFor="comboBox">Select an option: </label>
      <select id="comboBox" value={selectedOption} onChange={handleChange}>
        <option value="" disabled>
          Select an option
        </option>
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>

      {selectedOption && (
        <p>You selected: {options.find((option) => option.id === selectedOption)?.name}</p>
      )}
    </div>
  );
}
