/* eslint-disable react/prop-types */
import styles from "./Tab.module.css";

const Tab = ({ tabs, currentTab, setCurrentTab, addNewTab }) => {
  return (
    <div className={styles.tabContainer}>
      {tabs.map((tab, index) => (
        <button
          key={index}
          className={`${styles.tab} ${
            currentTab === index ? styles.active : ""
          }`}
          onClick={() => setCurrentTab(index)}
        >
          {tab || `Aparato ${index + 1}`}
        </button>
      ))}
      <button className={styles.addTab} onClick={addNewTab}>
        +
      </button>
    </div>
  );
};

export default Tab;
