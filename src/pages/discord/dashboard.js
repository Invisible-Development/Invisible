import React, { useEffect, useState } from 'react';
import Cookies from 'universal-cookie';
import axios from 'axios'
import oauth from 'axios-oauth-client'

function Dashboard() {
  const [name, setName] = useState();
  const [runAxios, setRunAxios] = useState(true); // this is only here because for some reason the function will want to run infinitely, making rate limits a problem, so I have to set a checker for this
  const [serversDivText, setServersDivText] = useState("Choose a server to view from the dropdown menu")
  const [serverDisplay, setServerDisplay] = useState();
  const cookies = new Cookies();
  const queryParams = new URLSearchParams(window.location.search);
  const code = queryParams.get('code');
  const token = cookies.get('token');

  //eslint-disable-next-line
  const list = new Array();
  const [servers, setServers] = useState("Invalid Response");


  if (token) {
    if (runAxios === true) {
      setRunAxios(false)
      axios.get(`https://discord.com/api/v10/users/@me/guilds`, {
        method: 'GET',
        headers: {
           "Authorization": `Bearer ${token}`
        }
        }).then(function (response) {
           response["data"].forEach(function (server, i) {
              list.push(<option key={i} id={i} data-server-id={server["id"]} value={server["name"]}>{server["name"]}</option>)
              setServers(list)
           })
        })
  
      axios.get("https://discord.com/api/v10/users/@me", {
        method: 'GET', 
        headers: {
          "Authorization": `Bearer ${token}`
        }
      }).then(function (response) {
        setName(response["data"]["username"])
      }) 
    }
  } else {
      if (code || runAxios === true) {
        setRunAxios(false)
        const getAuthorizationCode = oauth.authorizationCode(
            axios.create(),
            'https://discord.com/api/oauth2/token', // OAuth 2.0 token endpoint
            '1051162194722685039',
            process.env.REACT_APP_CLIENT_SECRET,
            `${process.env.REACT_APP_BASE_URL}/discord/dashboard` // Redirect URL for your app
          )
          getAuthorizationCode(code, 'identify guilds').then(function(response) {
            const token = response["access_token"]
            axios.get("https://discord.com/api/v10/users/@me/guilds", {
                method: 'GET',
                headers: {
                  "Authorization": `Bearer ${token}`
                }
                }).then(function (response) {
                  response["data"].forEach(function (server, i) {
                    list.push(<option key={i} id={i} data-server-id={server["id"]} value={server["name"]}>{server["name"]}</option>)
                    setServers(list)
                 })
                }).then(function (){
                    cookies.set('token', token, { path: '/' });
                }
            )
            })
            axios.get("https://discord.com/api/v10/users/@me", {
                method: 'GET', 
                headers: {
                  "Authorization": `Bearer ${token}`
                }
              }).then(function (response) {
                setName(response["data"]["username"])
            }) 
      } else {
          window.location.href = process.env.REACT_APP_DISCORD_URL
      }
  }
  
  useEffect(() => {
    document.getElementById("navt").classList.add("hidden")
  });

  return (
    <div>
        <div className="mt-20 m-4 pr-4">
          <button onClick={(e) => {
              var mainDiv = document.getElementById("mainDiv")
              var serversDiv = document.getElementById("serversDiv")
              var selectServer  = document.getElementById("selectServer")

              if (mainDiv.classList.contains("hidden")) {
                mainDiv.classList.remove("hidden");
                serversDiv.classList.add("hidden")
                selectServer.classList.add("hidden")
              }
              }}
              className="i mx-2 font-primary relative inline justify-center align-center text-fuchsia-600 hover:text-cyan-600 rounded-md bg-purple-700 p-8 w-40 my-2 transition ease-in-out hover:-translate-y-1 hover:scale-110">Main</button>
          <button onClick={(e) => {
              var mainDiv = document.getElementById("mainDiv")
              var serversDiv = document.getElementById("serversDiv")
              var selectServer  = document.getElementById("selectServer")

              if (serversDiv.classList.contains("hidden")) {
                mainDiv.classList.add("hidden");
                serversDiv.classList.remove("hidden")
                selectServer.classList.remove("hidden")
              }
            }}
              className="i mx-2 font-primary relative inline justify-center align-center text-fuchsia-600 hover:text-cyan-600 rounded-md bg-purple-700 p-8 w-40 my-2 transition ease-in-out hover:-translate-y-1 hover:scale-110">Servers</button>
          <form onChange={(e) => {
              var element = document.getElementById(e.target.selectedIndex - 1)
              setServersDivText(<h1 className="underline text-8xl cursor-pointer" onMouseEnter={(e) => {
                const info = document.getElementById("serverData")
                info.classList.remove("hidden")

              }} onMouseLeave={(e) => {
                const info = document.getElementById("serverData")
                info.classList.add("hidden")
              }}>{element.value}</h1>)
              const id = element.getAttribute("data-server-id")
              const token = cookies.get("token")
              console.log(token, id)
              axios.get(`https://discord.com/api/v10/users/@me/guilds`, {
                method: 'GET',
                headers: {
                   "Authorization": `Bearer ${token}`
                }
                }).then(function (response) {
                   response["data"].forEach(function (server, i) {
                      if (server["id"] === id) {
                        setServerDisplay(<div id="serverData" className="hidden absolute i bg-purple-700 rounded-md" >
                          Server Name: {server["name"]}
                          <br></br>
                          Server ID: {server["id"]}
                        </div>)
                      }
                })
              })
            }}>
            <select className="hidden rounded-md bg-purple-700 font-primary text-fuchsia-600 p-9" id="selectServer" defaultValue>
              <option value="none" disabled hidden selected>Select an Option</option>
              {servers}
            </select>
          </form>
        </div>

        <div className="inline-flex m-4">
          <div className="inline-flex" id="mainDiv">
            <h1 className="font-primary text-8xl text-fuchsia-600">Welcome, {name}</h1>
          </div>

          <div className="hidden inline-flex" id="serversDiv">
            <div className="font-primary text-2xl text-fuchsia-600" id="serversDivText">{serversDivText}<br></br>{serverDisplay}</div>
          </div>
        </div>

        <div className="mb-12"></div>
    </div>
  )
}

export default Dashboard