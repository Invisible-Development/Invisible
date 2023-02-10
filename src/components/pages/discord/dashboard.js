import React, { useEffect, useState } from 'react';
import Cookies from 'universal-cookie';
import axios from 'axios'
import oauth from 'axios-oauth-client'

function Dashboard() {
  const [name, setName] = useState();
  const [avatar, setAvatar] = useState();
  const cookies = new Cookies();
  const queryParams = new URLSearchParams(window.location.search);
  const code = queryParams.get('code');
  const token = cookies.get('token');

  //eslint-disable-next-line
  const list = new Array();
  const [servers, setServers] = useState("Invalid Code");


  if (token) {
    axios.get("https://discord.com/api/v10/users/@me/guilds", {
        method: 'GET',
        headers: {
           "Authorization": `Bearer ${token}`
        }
        }).then(function (response) {
           response["data"].forEach(function (server, i) {
              var href = `/discord/server/${server["id"]}`
              list.push(<div className="my-3"><a className="text-fuchsia-700 hover:text-cyan-600 font-primary m-10 text-2xl " key={i} href={href}>{server["name"]}<br></br></a></div>)
            })
        }).then(function (){
            setServers(list)
        }
      
    )
    axios.get("https://discord.com/api/v10/users/@me", {
      method: 'GET', 
      headers: {
        "Authorization": `Bearer ${token}`
      }
    }).then(function (response) {
      setName(response["data"]["username"])
      setAvatar(<img className="inline-block" src={`https://cdn.discordapp.com/avatars/${response["data"]["id"]}/${response["data"]["avatar"]}.png`} alt="discord-pfp" />)
    }) 
  } else {
      if (code) {
          const getAuthorizationCode = oauth.authorizationCode(
              axios.create(),
              'https://discord.com/api/oauth2/token', // OAuth 2.0 token endpoint
              '1051162194722685039',
              process.env.REACT_APP_CLIENT_SECRET,
              `${process.env.REACT_APP_BASE_URL}/discord/dashboard` // Redirect URL for your app
            )
            getAuthorizationCode(code, 'identify guilds').then(function(response) {
              const access_token = response["access_token"]
              axios.get("https://discord.com/api/v10/users/@me/guilds", {
                  method: 'GET',
                  headers: {
                    "Authorization": `Bearer ${access_token}`
                  }
                  }).then(function (response) {
                    response["data"].forEach(function (server, i) {
                        var href = `/discord/server/${server["id"]}`
                        list.push(<div><a className="my-5 text-fuchsia-700 hover:text-cyan-600 font-primary m-10 text-2xl" key={i} href={href}>{server["name"]}<br></br></a></div>)
                      })
                  }).then(function (){
                      setServers(list)
                      cookies.set('token', access_token, { path: '/' });
                  }
              )
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
        <aside className="mt-20 m-4 top-0 h-96 border-r-4 border-cyan-600 w-fit pr-4 inline-block">
            <button onClick={(e) => {document.getElementById("mainDiv").classList.toggle("hidden");document.getElementById("serversDiv").classList.add("hidden")}} className="i font-primary relative flex justify-center align-center text-fuchsia-600 hover:text-cyan-600 rounded-md bg-purple-700 p-8 w-40 my-2 transition ease-in-out hover:-translate-y-1 hover:scale-110">Main</button>
            <button onClick={(e) => {document.getElementById("serversDiv").classList.toggle("hidden");document.getElementById("mainDiv").classList.add("hidden")}} className="font-primary relative flex justify-center align-center text-fuchsia-600 hover:text-cyan-600 rounded-md bg-purple-700 p-8 w-40 my-2 transition ease-in-out hover:-translate-y-1 hover:scale-110">Servers</button>
        </aside>

        <div className="inline-block">
          <div className="inline-block" id="mainDiv">
            <h1 className="font-primary text-8xl text-fuchsia-600">Welcome, {name}</h1>
            {avatar}
          </div>

          <div className="hidden" id="serversDiv">
            <p>hi2</p>
          </div>

          {/* {servers} */}
        </div>

        <div className="mb-12"></div>
    </div>
  )
}

export default Dashboard