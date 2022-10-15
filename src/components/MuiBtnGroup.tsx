import { Button, ButtonGroup } from '@mui/material'
import { useState } from 'react'

const MuiBtnGroup = () => {
    const [tab, setTab] = useState("1")


    const tabHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        setTab((e.target as HTMLInputElement).value)
    }


    const renderTab = (tab: string) => {
        const tabs: any = {
            "1": <div>show 1</div>,
            "2": <div>show 2</div>,
            "3": <div>show 3</div>,
        }

        return tabs[tab]
    }

    return (
        <div>
            <ButtonGroup>
                <Button value="1" variant={tab === "1" ? "outlined" : "contained"} onClick={tabHandler}>One</Button>
                <Button value="2" variant={tab === "2" ? "outlined" : "contained"} onClick={tabHandler}>Two</Button>
                <Button value="3" variant={tab === "3" ? "outlined" : "contained"} onClick={tabHandler}>Three</Button>
            </ButtonGroup>
            <div>
                {renderTab(tab)}
            </div>
        </div >
    )
}

export default MuiBtnGroup