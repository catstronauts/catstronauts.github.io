import { useIntl } from "gatsby-plugin-intl"

const useTranslation = (textId: string) => {
  const intl = useIntl()

  return intl.formatMessage({ id: textId })
}

export default useTranslation
