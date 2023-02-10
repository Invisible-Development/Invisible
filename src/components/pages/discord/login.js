import axios from 'axios'
import oauth from 'axios-oauth-client'
import React, { useState } from "react";
import Cookies from 'universal-cookie';
import { Slide } from "react-awesome-reveal";

function DiscordLogin() {
    const cookies = new Cookies();
    const queryParams = new URLSearchParams(window.location.search);
    const code = queryParams.get('code');
    const token = cookies.get('token');
    const [servers, setServers] = useState("Invalid Code");
    //eslint-disable-next-line
    const list = new Array();

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
                        console.log(access_token)
                    }
                 )
              })

        } else {
            window.location.href = process.env.REACT_APP_DISCORD_URL
        }
    }
    
    return (
        <Slide left>
            <div className="bg-purple-700 rounded-xl shadow w-fit m-10 mt-20">
                <h1 className="font-primary text-fuchsia-600 text-8xl pt-8 pb-8 px-8">Discord Servers</h1>
            </div>

            {servers}

    </Slide>
    )
}

export default DiscordLogin