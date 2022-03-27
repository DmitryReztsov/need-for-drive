import React, {useState} from 'react';
import useAppendParams from '../../../hooks/useAppendParams';
import useOutside from '../../../hooks/useOutsideAlerter';

interface useAutoProps {
  resetField: string | undefined,
  list: string [],
  field: string,
  value?: string,
  clickDropdown: boolean | undefined,
  wrapperRef: React.RefObject<HTMLDivElement>,
}

export default function (props: useAutoProps) {
  const {
    resetField, clickDropdown, field, list, value, wrapperRef,
  } = props;
  const [activeSuggestion, setActiveSuggestion] = useState<number>(0);
  const [filteredSuggestions, setFilteredSuggestions] = useState<string []>([]);
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
  const appendParams = useAppendParams();

  // Здесь мы проверяем, обнуляет ли изменения этого поля какое-то другое поле.
  function clearField() {
    if (resetField) appendParams(resetField, null);
  }

  // В зависимости от значения сортируем список элементов
  function handleChangeInput(e: React.ChangeEvent<HTMLInputElement>) {
    setFilteredSuggestions(list.sort().filter(
      (suggestion) =>
        suggestion.toLowerCase().includes(e.currentTarget.value.toLowerCase()),
    ));
    setShowSuggestions(true);
    appendParams(field, e.currentTarget.value);
    clearField();
  }

  function handleClickInput(e: React.MouseEvent<HTMLInputElement>) {
    setFilteredSuggestions(clickDropdown ? list : list.filter(
      (suggestion) =>
        suggestion.toLowerCase().includes(e.currentTarget.value.toLowerCase()),
    ));
    setShowSuggestions(true);
  }

  function handleKeyInput(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.code === 'Enter') {
      setActiveSuggestion(0);
      setShowSuggestions(false);
      appendParams(field, filteredSuggestions[activeSuggestion]);
      clearField();
    } else if (e.code === 'ArrowUp') {
      if (activeSuggestion === 0) {
        return;
      }
      setActiveSuggestion(activeSuggestion - 1);
    } else if (e.code === 'ArrowDown') {
      if (activeSuggestion - 1 === filteredSuggestions.length) {
        return;
      }
      setActiveSuggestion(activeSuggestion + 1);
    }
  }

  function handleBlurInput(e: React.FocusEvent<HTMLInputElement>) {
    const buffer = filteredSuggestions.find((sugg) => sugg.includes(e.currentTarget.value));
    // Чтобы дать возможность сработать клику по меню, оставляем варианты когда
    // только одна опция или нет. Таким образом, мы автоподставляем нужно значение
    if (wrapperRef.current && !wrapperRef.current.contains(e.relatedTarget) && value) {
      setFilteredSuggestions([]);
      setShowSuggestions(false);
      appendParams(field, buffer || null);
    }
  }

  function handleClickOption(e: React.MouseEvent<HTMLLIElement>) {
    setFilteredSuggestions([]);
    setShowSuggestions(false);
    appendParams(field, e.currentTarget.innerText);
    clearField();
  }

  function handleKeyOption(e: React.KeyboardEvent<HTMLLIElement>) {
    if (e.code === 'Enter') {
      setFilteredSuggestions([]);
      setShowSuggestions(false);
      appendParams(field, e.currentTarget.innerText);
      clearField();
    }
  }

  useOutside(wrapperRef, setShowSuggestions);

  return {
    showSuggestions,
    filteredSuggestions,
    activeSuggestion,
    handleChangeInput,
    handleClickInput,
    handleKeyInput,
    handleBlurInput,
    handleClickOption,
    handleKeyOption,
  };
}
