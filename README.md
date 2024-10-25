# Manual de Implantação - Portal do Departamento de Educação em Saúde

## 1. Informações de Identificação

- **Cliente**: Departamento de Educação em Saúde - Campus Lagarto
- **Empresa**: SOLREDES
- **Responsável pelo Projeto**: Allan Cristiano da Silva Santos
- **Data**: 25/10/2024

## 2. Visão Geral do Projeto

- **Objetivo**: Implementação de um portal web para o Departamento de Educação em Saúde, servindo como interface centralizada para acesso a informações e recursos.
- **Escopo**: Construção e execução do portal em um container Docker utilizando a imagem `nginx:1.24.0-alpine-slim`.

## 3. Requisitos de Rede

### 3.1 VLANs Padronizadas

As VLANs abaixo devem ser configuradas nos switches para garantir o isolamento e a comunicação entre diferentes áreas do sistema:

- **VLAN 10**: Acesso público
- **VLAN 20**: Acesso restrito
- **VLAN 30**: Administração

> **Nota**: Essas VLANs foram padronizadas pela turma para assegurar a organização e segurança do tráfego de rede no ambiente.

### 3.2 Configuração de VLANs e IPs

Abaixo estão as VLANs de gerenciamento e emergência, bem como as VLANs destinadas a cada campus, com seus respectivos intervalos e sugestões de IPs.

- **VLAN 400**: Gerenciamento  
  - **Descrição**: VLAN dedicada ao gerenciamento de todos os dispositivos de rede.
  - **IP sugerido**: 10.0.0.1/24

- **VLAN 401**: Emergência  
  - **Descrição**: Utilizada para conexão emergencial de servidores críticos.
  - **IP sugerido**: 10.0.1.1/24

#### VLANs para Cada Campus

| Campus                 | Intervalo de VLAN | IP Inicial       | Descrição                                |
|------------------------|-------------------|------------------|------------------------------------------|
| São Cristóvão          | 100 - 119        | 192.168.100.1/24 | Redes de acesso no campus São Cristóvão  |
| Itabaiana              | 120 - 129        | 192.168.120.1/24 | Redes de acesso no campus Itabaiana      |
| Laranjeiras            | 130 - 139        | 192.168.130.1/24 | Redes de acesso no campus Laranjeiras    |
| Lagarto                | 140 - 149        | 192.168.140.1/24 | Redes de acesso no campus Lagarto        |
| Nossa Senhora da Glória| 150 - 159        | 192.168.150.1/24 | Redes de acesso no campus Glória         |

> **Nota**: Verifique a disponibilidade de IPs e VLANs no projeto da Atividade 1. Cada técnico deve registrar o IP utilizado para a sua configuração de VLAN, evitando conflitos com o intervalo reservado.

### 3.3 Portas Específicas para Testes e Implantação

Certifique-se de que as portas abaixo estão abertas e configuradas no firewall para permitir o acesso ao portal:

- **Porta 63303**: HTTP para acesso ao serviço web
- **Porta 80**: HTTP para acesso ao serviço interno

## 4. Procedimentos de Implantação

### 4.1 Preparação do Ambiente

1. Configurar as VLANs padronizadas nos switches da rede.
2. Verificar se a porta 63300 está liberada no firewall.
3. Configurar permissões de acesso para técnicos conforme o nível de acesso necessário.

### 4.2 Implantação do Serviço

1. **Criação do container Docker**:
   - Execute o comando para criar a imagem Docker:
     ```bash
     docker build -t educacao-saude .
     ```
2. **Execução do container**:
   - Inicie o container com o comando abaixo, mapeando as portas conforme necessário:
     ```bash
     docker run -d -p 63303:80 -it --rm --name docker-saude educacao-saude
     ```
   - Explicação dos parâmetros:
     - `-d`: Executa o container em segundo plano.
     - `-p 63303:80`: Mapeia a porta interna 80 do container para a porta externa 63303 do host.
     - `--rm`: Remove o container automaticamente ao final da execução.
     - `--name docker-saude`: Nomeia o container como "docker-saude".

### 4.3 Testes de Conectividade e Funcionalidade

1. Realizar testes de conectividade entre VLANs para garantir o isolamento e a comunicação adequada.
2. Verificar o acesso ao serviço via porta 63303 para garantir que o portal está funcionando corretamente.

### 4.4 Validação Final e Checklist de Verificação

1. Confirme que todos os componentes foram implantados com sucesso.
2. Revise a checklist de testes para garantir que todos os serviços estejam operacionais e que a conectividade entre as VLANs esteja conforme planejado.

## 5. Contatos e Suporte

- **Técnico responsável**: Allan Cristiano da Silva Santos - allan1266@academico.ufs.br
- **Equipe de Suporte**: allan1266@academico.ufs.br
