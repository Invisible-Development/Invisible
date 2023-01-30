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
    const list = new Array();
    console.log(process.env.REACT_APP_CLIENT_SECRET)

    if (token) {
        axios.get("https://discord.com/api/v10/users/@me/guilds", {
            method: 'GET',
            headers: {
               "Authorization": `Bearer ${token}`
            }
            }).then(function (response) {
               response["data"].forEach(function (server, i) {
                  var href = `/discord/server/${server["id"]}`
                  list.push(<a className="hover" key={i} href={href}>{server["name"]}<br></br></a>)
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
                `${process.env.REACT_APP_BASE_URL}/discord/login` // Redirect URL for your app
              )
              console.log("code")
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
                          list.push(<a className="my-5 hover" key={i} href={href}>{server["name"]}<br></br></a>)
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
            <div className="bg-gray-900 rounded-xl shadow w-fit m-10">
                <h1 className="font-primary text-cyan-600 text-8xl pt-8 pb-8 px-8">Discord Servers</h1>
            </div>
            <div className="">
                <p className="font-primary m-10 text-cyan-800 text-2xl">
                    {servers}
                </p>
            </div>
    </Slide>
    )
}

export default DiscordLogin