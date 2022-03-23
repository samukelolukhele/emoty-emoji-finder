import React, { useContext } from "react";
import { ApiContext } from "./context/ApiContext";

export default function Definition() {
  const { data, loading } = useContext(ApiContext);

  return (
    <div className="search-container flex-center">
      {data.emoji && !loading ? (
        <div className="search-term">
          <dt>
            <span className="emoji" role="img" aria-label="Tense Biceps">
              {data.emoji}
            </span>
            <span>{data.name}</span>
            <dd>{data.description}</dd>
          </dt>
        </div>
      ) : (
        loading && (
          <div className="search-term">
            <div className="loading" />
          </div>
        )
      )}
    </div>
  );
}
