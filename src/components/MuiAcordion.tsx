import React, { useState } from 'react'
import { AccordionSummary, Accordion, AccordionDetails, Typography } from '@mui/material'
import { ExpandMore } from '@mui/icons-material'

const MuiAcordion = () => {
    const [exp, setExp] = useState<string | false>(false)

    const handleChange = (isExp: boolean, id: string) => {
        setExp(isExp ? id : false)
    }

    return (
        <div>
            <Accordion expanded={exp === "panel1"} onChange={(e, isExpanded) => handleChange(isExpanded, "panel1")}>
                <AccordionSummary id="panel1-header" expandIcon={<ExpandMore />}>
                    <Typography>Acc 1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet animi doloribus porro architecto vero eum harum.
                        Illo sunt libero est nam ducimus tempore sequi. Repellat consequatur iste maxime fugiat veniam.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={exp === "panel2"} onChange={(e, isExpanded) => handleChange(isExpanded, "panel2")}>
                <AccordionSummary id="panel2-header" expandIcon={<ExpandMore />}>
                    <Typography>Acc 2</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet animi doloribus porro architecto vero eum harum.
                        Illo sunt libero est nam ducimus tempore sequi. Repellat consequatur iste maxime fugiat veniam.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}

export default MuiAcordion