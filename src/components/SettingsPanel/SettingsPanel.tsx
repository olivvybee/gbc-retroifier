import './SettingsPanel.scss';

export const SettingsPanel = () => {
  return (
    <div id="settings-panel" className="p-3">
      <span className="fs-5">Settings</span>

      <div className="my-3">
        <label htmlFor="brightness" className="form-label">
          <span className="fw-bold">Brightness:</span> 42
        </label>
        <input
          id="brightness"
          type="range"
          className="form-range"
          min={0}
          max={100}
          value={42}
          // onChange={(e) => setNumberOfItems(index, Number(e.target.value))}
        />
      </div>

      <div className="my-3">
        <label htmlFor="contrast" className="form-label">
          <span className="fw-bold">Contrast:</span> 42
        </label>
        <input
          id="contrast"
          type="range"
          className="form-range"
          min={0}
          max={100}
          value={42}
          // onChange={(e) => setNumberOfItems(index, Number(e.target.value))}
        />
      </div>
    </div>
  );
};
