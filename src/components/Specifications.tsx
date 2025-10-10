import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Cpu, 
  HardDrive, 
  Thermometer, 
  Zap, 
  Wifi, 
  Shield,
  Gauge,
  Battery
} from "lucide-react";

const specifications = {

  power: [
    { label: "Bateria Principal", value: "Bateria estacionária 60A", icon: Battery },
    { label: "Carregador", value: "Carregador de bateria 12v Bivolt", icon: Zap },
    { label: "Autonomia", value: "Até 48 horas sem recarga", icon: Gauge },
    { label: "Consumo", value: "25W em operação normal", icon: Thermometer }
  ],
  environmental: [
    { label: "Temperatura", value: "-10°C a +60°C", icon: Thermometer },
    { label: "Umidade", value: "5% a 95% RH não condensante", icon: Thermometer },
    { label: "Proteção", value: "IP67 - À prova d'água e poeira", icon: Shield },
    { label: "Dimensões", value: "53 x 53 x 185 cm (L x P x A). Com possibilidade de expansão.", icon: Gauge },
    { label: "Peso", value: "40 kg (com bateria)", icon: Gauge },
    { label: "Material", value: "Liga metálica, policarbonato, tecido e componentes eletromecânicos", icon: HardDrive }
  ]
};

const Specifications = () => {
  return (
    // ADICIONE O ID "especificacoes" AQUI ↓
    <section id="especificacoes" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            <Cpu className="w-4 h-4 mr-2" />
            Especificações Técnicas
          </Badge>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Detalhes
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> Técnicos</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conheça todas as especificações técnicas do nosso robô sinalizador viário. 
            Tecnologia de ponta em cada componente.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="hardware" className="w-full">
            <TabsList className="flex justify-center gap-4 mb-8">
            <TabsTrigger value="power">Energia</TabsTrigger>
            <TabsTrigger value="environmental">Ambiente</TabsTrigger>
</TabsList>

            <TabsContent value="power">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Battery className="w-6 h-6 text-primary" />
                    Sistema de Energia
                  </CardTitle>
                  <CardDescription>
                    Especificações de bateria, consumo e autonomia
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    {specifications.power.map((spec, index) => {
                      const Icon = spec.icon;
                      return (
                        <div key={index} className="flex items-center justify-between p-4 bg-secondary/30 rounded-lg">
                          <div className="flex items-center gap-3">
                            <div className="p-2 bg-accent/10 rounded-lg">
                              <Icon className="w-4 h-4 text-accent" />
                            </div>
                            <span className="font-medium">{spec.label}</span>
                          </div>
                          <span className="text-muted-foreground">{spec.value}</span>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="environmental">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Shield className="w-6 h-6 text-primary" />
                    Condições Ambientais
                  </CardTitle>
                  <CardDescription>
                    Resistência e especificações físicas do equipamento
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    {specifications.environmental.map((spec, index) => {
                      const Icon = spec.icon;
                      return (
                        <div key={index} className="flex items-center justify-between p-4 bg-secondary/30 rounded-lg">
                          <div className="flex items-center gap-3">
                            <div className="p-2 bg-primary/10 rounded-lg">
                              <Icon className="w-4 h-4 text-primary" />
                            </div>
                            <span className="font-medium">{spec.label}</span>
                          </div>
                          <span className="text-muted-foreground">{spec.value}</span>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Specifications;