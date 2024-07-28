"use client";
import { useEffect, useState } from "react";
import Chatbox from "./components/chatbox/page";
import Header from "./components/Header/page";

export default function MyComponent() {
  const [data, setData] = useState([]);
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Submitting prompt:", prompt);

    try {
      const response = await fetch(
        "https://chatbotserver-sandy.vercel.app/" && "http://localhost:9000",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          mode: "cors",
          body: JSON.stringify({ prompt }), // Using prompt directly
        }
      );

      if (response.ok) {
        const responseData = await response.json();
        console.log("Received response:", responseData);
        setData([...data, { prompt: prompt, response: responseData.response }]);
        setPrompt("");
      } else {
        console.error("Failed to submit prompt");
      }
    } catch (error) {
      console.error("Error submitting prompt:", error);
    }
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "http://localhost:9000" && "https://chatbotserver-sandy.vercel.app/",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          mode: "cors",
        }
      );

      if (response.ok) {
        const responseData = await response.json();
        console.log("Fetched data:", responseData);
        setData(responseData); // Correctly set fetched data
      } else {
        console.error("Failed to fetch data");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
    setLoading(false);
  }, []);

  const handleChange = (event) => {
    setPrompt(event.target.value);
  };

  return (
    <>
      <link rel="shortcut icon" href="#"></link>
      <Header />
      <div className="glow"></div>
      <div className="particles">
        <div className="rotate">
          <div className="angle">
            <div className="size">
              <div className="position">
                <div className="pulse">
                  <div className="particle"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="angle">
          <div className="size">
            <div className="position">
              <div className="pulse">
                <div className="particle"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="angle">
          <div className="size">
            <div className="position">
              <div className="pulse">
                <div className="particle"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="m-[5px]">
        <div className="mainbox h-[800px] w-[950px] bg-slate-950 text-slate-900 mt-[20px] mr-12">
          <div className="gg"></div>
          <div className="glow1"></div>
          <div className="particles1">
            <div className="rotate1">
              <div className="angle1">
                <div className="size1">
                  <div className="position1">
                    <div className="pulse1">
                      <div className="particle1"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="angle1">
                <div className="size1">
                  <div className="position1">
                    <div className="pulse1">
                      <div className="particle1"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="angle1">
                <div className="size1">
                  <div className="position1">
                    <div className="pulse1">
                      <div className="particle1"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col overflow-y-scroll overflow-x-scroll">
            {loading ? <p>Loading..</p> : null}
            <Chatbox data={data} prompt={prompt} loading={loading} />
          </div>
        </div>
        <form onSubmit={handleSubmit} className="formm">
          <input
            className="inp text-slate-900 bg-green-200 h-[40px] w-[700px] flex-grow mr-[-15px] mb-[-132px]"
            onChange={handleChange}
            value={prompt}
            placeholder="Enter a prompt."
          />
          <button
            className="butt bg-slate-900 w-[100px] h-[40px] mb-[-132px] text-slate-50"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
