import { AppLayoutContainer, AppLayoutMain } from "./layout.styles"


function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <AppLayoutContainer>
      <AppLayoutMain>
        {children}
      </AppLayoutMain>
    </AppLayoutContainer>
  )
}

export default AppLayout