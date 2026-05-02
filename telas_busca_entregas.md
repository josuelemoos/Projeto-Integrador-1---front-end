# SYSTEM PROMPT
You are a UI/UX designer assistant. Your job is to generate screen designs based on the prompts below.
Each screen contains: screen type, layout description, components, colors and interactions.
Generate one screen at a time unless asked otherwise.
The design system uses warm colors (orange, red, warm yellow) combined with blue accents.

---

# DESIGN SYSTEM

## Color Palette
- Primary Orange:      #E85D04  → Primary buttons, active icons, highlights
- Light Orange:        #F48C06  → Secondary headers, hover states
- Red:                 #D62828  → Alerts, error badges, H1 titles
- Warm Yellow:         #FFBA08  → Filter chips, table labels, star ratings
- Primary Blue:        #1B4FD8  → Links, info badges, 2FA elements
- Light Blue:          #3A86FF  → Status icons, unread notifications
- Background:          #F5F0EB  → General screen background (warm cream)
- Border/Divider:      #D9D0C7  → Borders, dividers
- Dark Text:           #1A1A1A  → Primary body text
- White:               #FFFFFF  → Cards, button text

## General Style Rules
- Layout: Mobile First. Admin screens are desktop with sidebar.
- Cards: rounded corners (border-radius 12-16px), soft drop shadows.
- Typography: Modern sans-serif (Inter or Poppins). Titles bold, body regular.
- Primary buttons: solid #E85D04 background, white text, rounded.
- Secondary buttons: #E85D04 outline, orange text, transparent background.
- Status badges: Delivered=green, In Transit=yellow #FFBA08, Pending=blue #3A86FF, Cancelled=red #D62828.
- Icons: consistent outline or filled style, orange or blue depending on context.
- Admin layout: fixed sidebar, colored topbar, central content area.

---

# SCREENS

---

## SUMÁRIO POR FLUXO

### Telas do Usuário / Cliente
- SCREEN 01 — Splash / Onboarding
- SCREEN 02 — Login & Register
- SCREEN 03 — Client Dashboard
- SCREEN 04 — Search & Filters
- SCREEN 05 — Order Details
- SCREEN 06 — Order History

### Telas do Entregador
- SCREEN 07 — Delivery Person Login with 2FA
- SCREEN 08 — Delivery Person Dashboard
- SCREEN 09 — Available Orders
- SCREEN 10 — Active Order (Delivery Person)
- SCREEN 11 — Delivery Confirmation

### Telas Administrativas
- SCREEN 12 — Admin Dashboard
- SCREEN 13 — Order Management (Admin)
- SCREEN 14 — Audit Logs (Admin)

### Tela Compartilhada
- SCREEN 15 — Notification Center

---

## SCREEN 01 — Splash / Onboarding
**Flow:** Client
**Type:** Mobile opening screen for a delivery app

| Element        | Description |
|----------------|-------------|
| Background     | Vertical gradient from #E85D04 (orange) to #D62828 (red) |
| Center         | Brand logo centered with soft white drop shadow |
| Tagline        | Short text below logo in white, light weight font |
| Buttons        | Two buttons at bottom: "Entrar" (white bg, orange text) and "Cadastrar" (white outline, white text) |
| Footer         | App version in light gray, subtle |

---

## SCREEN 02 — Login & Register
**Flow:** Client
**Type:** Mobile authentication screen with switchable tabs

| Element        | Description |
|----------------|-------------|
| Tabs           | Two tabs at top: "Entrar" and "Cadastrar". Active tab underlined in #E85D04 |
| Login tab      | Email + password fields (password has eye icon). Primary "Entrar" button in orange. "Esqueci minha senha" link in blue #3A86FF below |
| Register tab   | Fields: full name, email, password with strength bar (green/yellow/red). "Criar conta" button in orange |
| Background     | #F5F0EB warm cream. White centered card with soft shadow |
| Top icon       | Motorcycle or box icon in orange above the card |

---

## SCREEN 03 — Client Dashboard
**Flow:** Client
**Type:** Mobile main panel for client user

| Element              | Description |
|----------------------|-------------|
| Header               | Orange background #E85D04. Greeting "Olá, [Name]!" in white. Bell notification icon on the right |
| Search bar           | White rounded input below header with orange magnifier icon |
| In Progress cards    | Horizontal scroll of white cards with shadow. Each card: colored status badge, order code, last update, arrow to details |
| Recent section       | Vertical list of recent orders with icon, code and status |
| Bottom navigation    | Home (active in orange), Search, History, Notifications |

---

## SCREEN 04 — Search & Filters
**Flow:** Client
**Type:** Mobile order search and filtering screen

| Element        | Description |
|----------------|-------------|
| Header         | White background, "Buscar Encomendas" title in orange, back button |
| Search bar     | Prominent text input at top with orange icon |
| Filter chips   | Horizontal scrollable chips: "Todos" (active in orange), "Já Recolhido", "Pendente", "Por Data". Inactive chips in light yellow #FFBA08 with dark text |
| Results list   | Cards: order code, colored status badge, estimated date. Alternating white/#F5F0EB background |
| Empty state    | Simple box-with-magnifier illustration and "Nenhum resultado encontrado" text |

---

## SCREEN 05 — Order Details
**Flow:** Client
**Type:** Mobile complete order details screen

| Element          | Description |
|------------------|-------------|
| Header           | Orange background with order code in white and back button |
| Timeline         | Vertical component: 4 steps (Pedido Criado, Coletado, Em Rota, Entregue). Completed steps in orange, current blinking in yellow, future in gray |
| Delivery person  | White card with circular photo, name and phone icon in blue #3A86FF |
| Time selector    | Preferred delivery time selector with orange clock icon. "Confirmar horário" button in solid orange |
| Footer           | Origin and destination info in secondary gray text |

---

## SCREEN 06 — Order History
**Flow:** Client
**Type:** Mobile past deliveries history screen

| Element        | Description |
|----------------|-------------|
| Header         | Orange background, "Histórico" title in white |
| Period filter  | Date range selector at top with yellow calendar icon |
| List items     | Cards with alternating white/#F5F0EB. Each: box icon, code, completion date, final status badge (green=Delivered, red=Cancelled), expand chevron |
| Expanded state | Shows: origin, destination, delivery person and star rating in yellow #FFBA08 |

---

## SCREEN 07 — Delivery Person Login with 2FA
**Flow:** Delivery Person
**Type:** Mobile two-step login for delivery person

| Element        | Description |
|----------------|-------------|
| Step 1         | Email and password fields. "Continuar" button in orange. Blue badge "Área do Entregador" at top of card |
| Step 2 (new screen) | Blue alert #1B4FD8 at top: "Novo dispositivo detectado". 6-digit OTP field centered with individual boxes and orange border. "Verificar" orange button. "Reenviar código" link in blue with countdown timer |
| Background     | Soft gradient from #F5F0EB to white |
| Security icon  | Shield with padlock in blue #1B4FD8 above OTP field |

---

## SCREEN 08 — Delivery Person Dashboard
**Flow:** Delivery Person
**Type:** Mobile main panel for delivery person

| Element              | Description |
|----------------------|-------------|
| Header               | Dark red background #D62828. Circular profile photo on left, delivery person name. Online/Offline toggle on right (green=online, gray=offline) |
| Active order card    | Large card with left orange border. Destination address highlighted, current status, "Ver detalhes" button in blue |
| Available orders     | Section with title and 2-3 brief summary cards showing distance and estimated value |
| Bottom navigation    | Home, Orders, History, Profile — active in orange |

---

## SCREEN 09 — Available Orders
**Flow:** Delivery Person
**Type:** Mobile list of orders to accept or refuse

| Element        | Description |
|----------------|-------------|
| Header         | Red background #D62828, "Pedidos Disponíveis" title in white, order count in yellow badge |
| Order card     | White card with shadow. Top row: origin icon (orange) and destination icon (blue) with arrow between. Bottom row: estimated distance and countdown timer in red |
| Card buttons   | "Aceitar" in green #2D9B4E and "Recusar" in light red, both rounded, each taking half the card width |
| Timer bar      | Thin progress bar below card showing time remaining, color transitions from orange to red |

---

## SCREEN 10 — Active Order (Delivery Person)
**Flow:** Delivery Person
**Type:** Mobile active delivery tracking screen

| Element        | Description |
|----------------|-------------|
| Header         | Destination address highlighted on orange background. Map icon in white |
| Status buttons | Three large buttons in vertical sequence: "Marcar como Coletado" (solid orange), "Marcar Em Rota" (disabled gray until previous step done), "Marcar como Entregue" (green when enabled). Each with left-side icon |
| Client card    | Bottom card with client name, phone icon in blue #3A86FF and call button |
| Progress       | Colored progress line at top showing current step |

---

## SCREEN 11 — Delivery Confirmation
**Flow:** Delivery Person
**Type:** Mobile final delivery confirmation via code

| Element        | Description |
|----------------|-------------|
| Icon           | Large centered box with checkmark in orange |
| Instruction    | "Solicite o código ao destinatário" in dark gray, centered |
| OTP field      | 4 individual input boxes, orange border, large digits |
| Button         | "Confirmar entrega" in solid orange, full width |
| Success state  | Background turns soft green, large check icon, "Entrega confirmada!" in green |
| Error state    | OTP boxes get red border, error message below in red |

---

## SCREEN 12 — Admin Dashboard
**Flow:** Admin
**Type:** Desktop admin panel screen

| Element        | Description |
|----------------|-------------|
| Sidebar        | Dark background #1A1A1A. Menu items with white icons. Active item has orange left highlight |
| Topbar         | Orange background #E85D04, system name in white, admin avatar on right |
| Metric cards   | 4 cards in a row: "Pedidos Hoje" (orange), "Em Andamento" (yellow), "Entregadores Ativos" (blue), "Alertas" (red). Large number, icon and percentage change |
| Recent table   | Zebra-striped table (white/#F5F0EB). Header with light orange background. Colored status badges |
| Chart          | Line/bar chart with palette colors showing weekly volume |

---

## SCREEN 13 — Order Management (Admin)
**Flow:** Admin
**Type:** Desktop full order management screen

| Element        | Description |
|----------------|-------------|
| Filters        | Filter row at top: Status, Date, Delivery Person dropdowns. "Filtrar" button in orange, "Limpar" in gray |
| Table          | Columns: Code, Client, Delivery Person, Origin, Destination, Status (colored badge), Actions. Zebra-striped rows. Fixed header with light yellow background #FFBA08 |
| Row actions    | Icons: eye (blue=view), pencil (orange=edit), person (red=intervene) |
| Pagination     | Footer with page navigation, buttons with orange border |

---

## SCREEN 14 — Audit Logs (Admin)
**Flow:** Admin
**Type:** Desktop sensitive action registry screen

| Element        | Description |
|----------------|-------------|
| Filters        | Date range and action type dropdown. Export button in blue #1B4FD8 |
| Table          | Columns: Timestamp, User, Role (badge: Admin=red, Delivery=orange), Action performed, IP address |
| Highlights     | Critical action rows have very light red background #FFF0F0 |
| Footer         | Total record count and pagination |

---

## SCREEN 15 — Notification Center
**Flow:** Client / Delivery Person
**Type:** Mobile status alert central screen

| Element        | Description |
|----------------|-------------|
| Header         | Orange background, "Notificações" title, "Marcar todas como lidas" button in yellow |
| Unread item    | Slightly yellow background #FFF8E7. Blue dot #3A86FF on left. Colored status icon, update description, relative timestamp in gray |
| Read item      | White background, no blue dot, text in medium gray |
| Grouping       | Day sections: "Hoje", "Ontem", "Esta semana" with light orange separators |

---

## SCREEN 16 — Help & FAQ
**Flow:** Client / Delivery Person
**Type:** Mobile help and frequently asked questions screen

| Element        | Description |
|----------------|-------------|
| Header         | Orange background, "Ajuda" title, question mark icon in white |
| Search         | Search field with orange magnifier icon |
| Sections       | Section cards: "Para Clientes" with person icon (orange) and "Para Entregadores" with motorcycle icon (red) |
| FAQ accordion  | Each question with chevron. When expanded: answer with light yellow background #FFF8E7 and left orange border |
| Footer         | "Falar com suporte" button with chat icon in blue #1B4FD8 |

---

# USAGE INSTRUCTIONS
To generate a specific screen, use the command:
  "Generate screen [NUMBER] — [NAME]"

To generate all screens sequentially:
  "Generate all screens in order, one at a time."

To adjust the style:
  "Regenerate screen [NUMBER] with [adjustment]."
