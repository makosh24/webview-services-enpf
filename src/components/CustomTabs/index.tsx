import React, {useEffect} from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import eclipse from "../../assets/svg/eclipse.svg";
import {usePrevious} from '../../common/usePrevious'
import { styled } from "@mui/material/styles";
import {localization} from '../../localization'

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <section
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <ContentItem>
          {children}
        </ContentItem>
      )}
    </section>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}




const ContentItem = styled("section")(({ theme }) => ({
  paddingTop: '40px',
  display:"flex",
  justifyContent:"space-between",
  flexDirection:"column",
  alignItems:"flex-start",
  [theme.breakpoints.down("md")]: {
    paddingTop: '24px',
  }
}));

const StyledTabs = styled("section")(({ theme }) => ({
  "& .tabsText": {
      fontSize: '20px',
      lineHeight: '28px',
    [theme.breakpoints.down("md")]: {
        fontSize: '16px',
        lineHeight: '24px',
    },
  },

  "& .titleTerms": {
    fontSize: 24,
    marginBottom: 24,
    [theme.breakpoints.down("md")]: {
      fontSize: 20,
      marginBottom: 16,
  },
  },

  
  "& .mainRequirementWrapper": {
    marginBottom: 12,
    marginRight: 48,

    [theme.breakpoints.down("md")]: {
      marginBottom: 8,
      marginRight: 24,
    }
  },
  // "& .mainRequirementItem:not(:last-child)": {
  //   marginRight: 48,
  //   [theme.breakpoints.down("md")]: {
  //     marginRight: 24,
  //   }
  // },
  // "& .mainRequirementItem2": {
  //   marginBottom: '24px',
  //   whiteSpace: 'nowrap',

  // },
  "& .mainRequirementItem": {
    display: 'flex',
    marginBottom: '24px',



  },
  "& .mainRequirements_first": {
    fontWeight: 600,
    width: 228,
    marginRight: 48,
    [theme.breakpoints.down("md")]: {
      width: 132,
      minWidth: 132,
      marginRight: 24,

    },
  },
  "& .mainRequirements_second": {
    // marginBottom: '24px',

  },
  "& .list_item": {
    marginBottom: '24px',
    display: 'flex',
    '& img': {
      marginRight: 16,
    }
  },
  
  
  // [theme.breakpoints.down("md")]: {
  //   "& h4": {
  //     fontSize: "1.2rem",
  //   },
  // },

  [theme.breakpoints.up("md")]: {
    width: "100%",
  },
}));

interface ICustomTabs {
  tabNumber?: number,
  language: string,
}

export function CustomTabs({tabNumber, language}: ICustomTabs) {
  const prevTabNumber = usePrevious(tabNumber);

  useEffect(() => {
    if(prevTabNumber !== tabNumber) {
      setValue(tabNumber)
    }
  }, [tabNumber, prevTabNumber])

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const mainRequirements = [
    {id: 1, first: localization.helpfullInfoTermsTitle_0[language], second: localization.helpfullInfoTermsSubTitle_0[language]},
    {id: 2, first: localization.helpfullInfoTermsTitle_1[language], second: localization.helpfullInfoTermsSubTitle_1[language]},
    {id: 3, first: localization.helpfullInfoTermsTitle_2[language], second: localization.helpfullInfoTermsSubTitle_2[language]},
    {id: 4, first: localization.helpfullInfoTermsTitle_3[language], second: localization.helpfullInfoTermsSubTitle_3[language]},
    {id: 5, first: localization.helpfullInfoTermsTitle_4[language], second: localization.helpfullInfoTermsSubTitle_4[language]},
  ]
  const mainRequirementsMaxPrice = [
    {id: 1, text: localization.helpfullInfoTermsMaxPrice_0[language]},
    {id: 2, text: localization.helpfullInfoTermsMaxPrice_1[language]},
    {id: 3, text: localization.helpfullInfoTermsMaxPrice_2[language]},
  ];
  const requiredDocuments = [
    {id: 1, text: localization.helpfullInfoDocuments_0[language]},
    {id: 2, text: localization.helpfullInfoDocuments_1[language]},
    {id: 3, text: localization.helpfullInfoDocuments_2[language]},
    {id: 4, text: localization.helpfullInfoDocuments_3[language]},
    {id: 5, text: localization.helpfullInfoDocuments_4[language]},
    {id: 6, text: localization.helpfullInfoDocuments_5[language]},
    {id: 7, text: localization.helpfullInfoDocuments_6[language]},
  ];

  const requirementsToBorrower = [
    {id: 1, text: localization.helpfullInfoRequirements_0[language]},
    {id: 2, text: localization.helpfullInfoRequirements_1[language]},
    {id: 3, text: localization.helpfullInfoRequirements_2[language]},
    {id: 4, text: localization.helpfullInfoRequirements_3[language]},
    {id: 5, text: localization.helpfullInfoRequirements_4[language]},
    {id: 6, text: localization.helpfullInfoRequirements_5[language]},
  ]

  return (
    <StyledTabs>
      <Box borderBottom={1} borderColor="divider">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          allowScrollButtonsMobile
          variant="scrollable"
          textColor="primary"
        >
          <Tab
            sx={{
              fontWeight: 600,
              fontSize: '16px'
            }}
            label={localization.helpfullInfoTerms[language]}
            {...a11yProps(0)}
          />
          <Tab sx={{ fontWeight: 600, fontSize: '16px' }} label={localization.helpfullInfoDocuments[language]} {...a11yProps(1)} />
          <Tab
            sx={{ fontWeight: 600, fontSize: '16px' }}
            label={localization.helpfullInfoRequirements[language]}
            {...a11yProps(2)}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Box width="100%" display="flex" flexDirection="column" className="mainRequirementWrapper">
            {/* <div  className="mainRequirementItem"> */}
              {mainRequirements.map(item => 
                <div key={`${item.id}-mainRequirements`} className="mainRequirementItem">
                  <div key={item.first} className="mainRequirements_first tabsText">{item.first}</div>
                  <div key={item.second} className="mainRequirements_second tabsText">{item.second}</div>
                </div>

              )}
          </Box>
          <Box>
          <Typography className='titleTerms' textAlign="left" fontWeight={600}>            
            {localization.helpfullInfoTermsMaxPrice[language]}
          </Typography>
          <div>
            {mainRequirementsMaxPrice.map(item => 
              <div key={`${item.id}-mainRequirementsMaxPrice`} className='list_item'>
                {/* <img src={eclipse} alt="eclipse" /> */}
                <span className='tabsText'>{item.text}</span>
              </div>
            )}
          </div>
          {/* <Typography fontSize="24px" textAlign="left" fontWeight={600}>
            Требования к автомобилю
          </Typography>
          <CustomTable /> */}
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Box display="flex" gap={4}>
        <div>
            {requiredDocuments.map(item => 
              <div key={`${item.id}-requiredDocuments`} className='list_item'>
                {/* <img src={eclipse} alt="eclipse" /> */}
                <span className='tabsText'>{item.text}</span>
              </div>
            )}
          </div>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Box display="flex" gap={4}>
          <div>
            {requirementsToBorrower.map(item => 
              <div key={`${item.id}-requirementsToBorrower`} className='list_item'>
                {/* <img src={eclipse} alt="eclipse" /> */}
                <span className='tabsText'>{item.text}</span>
              </div>
            )}
          </div>
        </Box>
      </TabPanel>
    </StyledTabs>
  );
}
