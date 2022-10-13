CreateThread(function() 
    Wait(1500)
    SendNUIMessage({type="test", value="lol"})
end)