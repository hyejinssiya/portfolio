import { useEffect } from "react"

const Filter = ({ activeFilter, setactiveFilter, setFiltered, all }) => {

  useEffect(() => {
    if (activeFilter === "전체") {
      setFiltered(all)
      return
    }
    const filtered = all.filter(project => project.brand.includes(activeFilter));
    setFiltered(filtered);
  }, [activeFilter])
  

  return (
    <div className="filter-container">
      <button 
        className={activeFilter === "전체" ? "active" : ""}
        onClick={() => setactiveFilter("전체")}
      >
       전체
      </button>
      <button 
        className={activeFilter === "반응형" ? "active" : ""}
        onClick={() => setactiveFilter("반응형")}
      >
       반응형
      </button>
      <button 
        className={activeFilter === "PC" ? "active" : ""}
        onClick={() => setactiveFilter("PC")}
      >
        PC
      </button>
      <button 
        className={activeFilter === "APP" ? "active" : ""}
        onClick={() => setactiveFilter("APP")}
      >
        APP
      </button>
    </div>
  )
}

export default Filter