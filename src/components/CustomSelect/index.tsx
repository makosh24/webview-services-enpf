import React, { FC, HTMLAttributes, useCallback, useState, useEffect, useRef } from "react"
import { Typography} from "@mui/material";
import {Wrapper, Select, Current, Content, Arrow, Label, ContentItem, LabelText} from './styled';
import ArrowSelect from "../../assets/svg/arrow-select.svg";

interface BBCSelectProps extends HTMLAttributes<HTMLUListElement> {
  items: any[];
  label?: string;
  name?: string;
  onChange(value: any): void,
  valueName: string,
  error?: string | false,
};

export const CustomSelect: FC<BBCSelectProps> = ({
  name,
  onChange,
  label = 'label',
  items,
  valueName,
  error,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [currentValue, setCurrentValue] = useState<any>();

  const handleSelect = useCallback((item: any) => {
    setIsOpen(false);
    setCurrentValue(item);
    onChange(item)
  }, [onChange])

  useEffect(() => {
    const outsideClick = (event: any) => {
      if (ref.current && !ref.current.contains(event.target as HTMLElement)) {
        setIsOpen(false);
      }
    }
    
    window.addEventListener('click', outsideClick)
    return () => window.removeEventListener('click', outsideClick)
  }, [])

  return (
    <Wrapper ref={ref} >
      <Select onClick={() => setIsOpen(!isOpen)} className={`${error && 'isError'}`}>
        {!currentValue &&  
        <Label
          htmlFor={name}
        >
          <LabelText>{label}</LabelText>
        </Label>
        }
        <Current>{currentValue && currentValue[valueName]}</Current>
        <Arrow 
        >
            {/* <img style={{transform: `${isOpen ? `rotate(180deg)` : ``}`}} src={ArrowSelect} alt="arrow-select" />{isOpen} */}
        </Arrow>

      </Select>
      {error && 
        <Typography
          color='#FF421D'
          fontSize='12px'
          fontWeight={600}
        >
          {error}
        </Typography>}
      {isOpen && 
        <Content>
          {items.map(item => 
            <ContentItem value={item[valueName]} key={item[valueName]} onClick={() => handleSelect(item)}>
              {item[valueName]}
            </ContentItem>
          )}
      </Content>
      }
    </Wrapper>
  )
};